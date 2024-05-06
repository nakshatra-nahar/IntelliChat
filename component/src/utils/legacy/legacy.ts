import {MessageContent, OnMessage} from '../../types/messages';
import {ValidateInput} from '../../types/validateInput';
import {MessageFile} from '../../types/messageFile';
import {CustomStyle} from '../../types/styles';
import {Connect} from '../../types/connect';
import {Stream} from '../../types/stream';
import {intelliChat} from '../../intelliChat';

interface LegacyintelliChat {
  request?: Connect;
  stream?: Stream;
  initialMessages?: MessageContent[];
  containerStyle?: CustomStyle;
  onNewMessage?: OnMessage;
}

export class Legacy {
  public static checkForContainerStyles(intelliChat: intelliChat, containerRef: HTMLElement) {
    const containerStyle = (intelliChat as unknown as LegacyintelliChat).containerStyle;
    if (containerStyle) {
      Object.assign(containerRef.style, containerStyle);
      console.error('The containerStyle property is deprecated since version 1.3.14.');
      console.error('Please change to using the style property instead: https://intellichat.dev/docs/styles#style');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static handleResponseProperty(result: any | Response) {
    console.error('The {result: ....} response object type is deprecated since version 1.3.0.');
    console.error('Please change to using the new response object: https://intellichat.dev/docs/connect#Response');
    return result.result;
  }

  public static processHistory(intelliChat: intelliChat) {
    const initialMessages = (intelliChat as unknown as LegacyintelliChat).initialMessages;
    if (initialMessages) {
      console.error('The initialMessages property is deprecated since version 1.5.0.');
      console.error('Please change to using the history property instead: https://intellichat.dev/docs/messages/#history');
      return initialMessages;
    }
    return undefined;
  }

  public static processHistoryFile(message: MessageContent) {
    const file = (message as MessageContent & {file?: MessageFile}).file;
    if (file) {
      console.error('The file property in MessageContent is deprecated since version 1.3.17.');
      console.error('Please change to using the files array property: https://intellichat.dev/docs/messages/#MessageContent');
      message.files = [file];
    }
  }

  public static processValidateInput(intelliChat: intelliChat) {
    const validate = (intelliChat as intelliChat & {validateMessageBeforeSending?: ValidateInput}).validateMessageBeforeSending;
    if (validate) {
      console.error('The validateMessageBeforeSending property is deprecated since version 1.3.24.');
      console.error('Please change to using validateInput: https://intellichat.dev/docs/interceptors#validateInput');
      return validate;
    }
    return undefined;
  }

  public static processSubmitUserMessage(content: string) {
    console.error('The submitUserMessage(text: string) argument string type is deprecated since version 1.4.4.');
    console.error('Please change to using the new argument type: https://intellichat.dev/docs/methods#submitUserMessage');
    return {text: content};
  }

  public static flagHTMLUpdateClass(bubbleElement: HTMLElement) {
    if (bubbleElement.children[0]?.classList.contains('intelli-chat-update-message')) {
      console.error('The "intelli-chat-update-message" html class is deprecated since version 1.4.4.');
      console.error('Please change to using {..., overwrite: true} object: https://intellichat.dev/docs/connect#Response');
    }
  }

  public static processConnect(intelliChat: intelliChat) {
    const legacyintellichat = intelliChat as unknown as intelliChat & LegacyintelliChat;
    if (legacyintellichat.request) {
      if (legacyintellichat.connect) {
        Object.assign(legacyintellichat.connect, legacyintellichat.request);
      } else {
        // this will cause the component to render twice but it is needed
        legacyintellichat.connect = legacyintellichat.request;
      }
      console.error('The request property is deprecated since version 1.5.0.');
      console.error('Please see the connect object: https://intellichat.dev/docs/connect#connect-1');
    }
  }

  public static checkForStream(intelliChat: intelliChat) {
    const stream = (intelliChat as unknown as LegacyintelliChat).stream;
    if (stream) {
      console.error('The stream property has been moved to the connect object in version 1.5.0.');
      console.error('Please see the connect object: https://intellichat.dev/docs/connect#connect-1');
      return stream;
    }
    return undefined;
  }

  public static fireOnNewMessage(intelliChat: intelliChat, updateBody: {message: MessageContent; isHistory: boolean}) {
    const legacyintellichat = intelliChat as unknown as intelliChat & LegacyintelliChat;
    if (legacyintellichat.onNewMessage) {
      console.error('The onNewMessage event has deprecated since version 1.5.0.');
      console.error('Please see the onMessage event: https://intellichat.dev/docs/events#onMessage');
      legacyintellichat.onNewMessage?.(updateBody);
    }
    intelliChat.dispatchEvent(new CustomEvent('new-message', {detail: updateBody}));
  }
}
