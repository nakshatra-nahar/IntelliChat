import {DirectServiceIO} from '../utils/directServiceIO';
import {BuildHeadersFunc} from '../../types/headers';
import {AzureUtils} from './utils/azureUtils';
import {ServiceFileTypes} from '../serviceIO';
import {APIKey} from '../../types/APIKey';
import {intelliChat} from '../../intelliChat';

export class AzureLanguageIO extends DirectServiceIO {
  override insertKeyPlaceholderText = 'Azure Language Subscription Key';
  override keyHelpUrl =
    // eslint-disable-next-line max-len
    'https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal';
  permittedErrorPrefixes = ['Access'];

  // prettier-ignore
  constructor(intelliChat: intelliChat, buildHeadersFunc: BuildHeadersFunc, endpoint: string, apiKey?: APIKey,
      existingFileTypes?: ServiceFileTypes) {
    super(intelliChat,
      AzureUtils.buildLanguageKeyVerificationDetails(endpoint), buildHeadersFunc, apiKey, existingFileTypes);
  }
}
