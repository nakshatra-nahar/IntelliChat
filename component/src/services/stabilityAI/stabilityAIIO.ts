import {KeyVerificationDetails} from '../../types/keyVerificationDetails';
import {DirectServiceIO} from '../utils/directServiceIO';
import {BuildHeadersFunc} from '../../types/headers';
import {ServiceFileTypes} from '../serviceIO';
import {APIKey} from '../../types/APIKey';
import {intelliChat} from '../../intelliChat';

export class StabilityAIIO extends DirectServiceIO {
  override insertKeyPlaceholderText = 'Stability AI API Key';
  override keyHelpUrl = 'https://platform.stability.ai/docs/getting-started/authentication';
  permittedErrorPrefixes = ['Incorrect', 'invalid_'];

  // prettier-ignore
  constructor(intelliChat: intelliChat, keyVerificationDetails: KeyVerificationDetails,
      buildHeadersFunc: BuildHeadersFunc, apiKey?: APIKey, existingFileTypes?: ServiceFileTypes) {
    super(intelliChat, keyVerificationDetails, buildHeadersFunc, apiKey, existingFileTypes);
  }
}
