import {DirectConnection} from '../../types/directConnection';
import {MessageContentI} from '../../types/messagesInternal';
import {Messages} from '../../views/chat/messages/messages';
import {CohereChatResult} from '../../types/cohereResult';
import {HTTPRequest} from '../../utils/HTTP/HTTPRequest';
import {DirectServiceIO} from '../utils/directServiceIO';
import {CohereChatConfig} from '../../types/cohere';
import {MistralUtils} from './utils/mistralUtils';
import {Response} from '../../types/response';
import {Mistral} from '../../types/mistral';
import {APIKey} from '../../types/APIKey';
import {intelliChat} from '../../intelliChat';

export class MistralIO extends DirectServiceIO {
  override insertKeyPlaceholderText = 'Mistral API Key';
  override keyHelpUrl = 'https://console.mistral.ai/api-keys/';
  url = 'https://api.mistral.ai/v1/chat/completions';
  permittedErrorPrefixes = ['invalid'];

  constructor(intelliChat: intelliChat) {
    const directConnectionCopy = JSON.parse(JSON.stringify(intelliChat.directConnection)) as DirectConnection;
    const configAndAPIKey = directConnectionCopy.mistral;
    super(intelliChat, MistralUtils.buildKeyVerificationDetails(), MistralUtils.buildHeaders, configAndAPIKey);
    if (configAndAPIKey) {
      this.cleanConfig(configAndAPIKey);
      Object.assign(this.rawBody, configAndAPIKey);
    }
    this.maxMessages ??= -1;
    this.rawBody.model ??= 'open-mistral-7b';
  }

  private cleanConfig(config: Mistral & APIKey) {
    delete config.key;
  }

  // build a single string for user
  private preprocessBody(body: CohereChatConfig, pMessages: MessageContentI[]) {
    const bodyCopy = JSON.parse(JSON.stringify(body));
    const textMessages = pMessages.filter((message) => message.text);
    bodyCopy.query = textMessages[textMessages.length - 1].text;
    bodyCopy.chat_history = textMessages
      .slice(0, textMessages.length - 1)
      .map((message) => ({text: message.text, user_name: message.role === 'ai' ? 'CHATBOT' : 'USER'}));
    return bodyCopy;
  }

  override async callServiceAPI(messages: Messages, pMessages: MessageContentI[]) {
    if (!this.connectSettings) throw new Error('Request settings have not been set up');
    const body = this.preprocessBody(this.rawBody, pMessages);
    HTTPRequest.request(this, body, messages);
  }

  override async extractResultData(result: CohereChatResult): Promise<Response> {
    if (result.message) throw result.message;
    return {text: result.text};
  }
}
