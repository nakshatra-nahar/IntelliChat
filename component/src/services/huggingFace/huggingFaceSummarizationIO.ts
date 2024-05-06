import {HuggingFaceSummarizationResult} from '../../types/huggingFaceResult';
import {HuggingFace} from '../../types/huggingFace';
import {HuggingFaceIO} from './huggingFaceIO';
import {Response} from '../../types/response';
import {intelliChat} from '../../intelliChat';

export class HuggingFaceSummarizationIO extends HuggingFaceIO {
  constructor(intelliChat: intelliChat) {
    const config = intelliChat.directConnection?.huggingFace?.summarization as NonNullable<HuggingFace['summarization']>;
    const apiKey = intelliChat.directConnection?.huggingFace;
    super(intelliChat, 'Insert text to summarize', 'facebook/bart-large-cnn', config, apiKey);
  }

  override async extractResultData(result: HuggingFaceSummarizationResult): Promise<Response> {
    if (result.error) throw result.error;
    return {text: result[0]?.summary_text || ''};
  }
}
