import {HuggingFaceClassificationResult} from '../../types/huggingFaceResult';
import {HuggingFaceFileIO} from './huggingFaceFileIO';
import {HuggingFace} from '../../types/huggingFace';
import {PollResult} from '../serviceIO';
import {intelliChat} from '../../intelliChat';

export class HuggingFaceImageClassificationIO extends HuggingFaceFileIO {
  constructor(intelliChat: intelliChat) {
    const config = intelliChat.directConnection?.huggingFace?.imageClassification as NonNullable<
      HuggingFace['imageClassification']
    >;
    const apiKey = intelliChat.directConnection?.huggingFace;
    super(intelliChat, 'Attach an image file', 'google/vit-base-patch16-224', config, apiKey, {images: {}});
  }

  async extractPollResultData(result: HuggingFaceClassificationResult): PollResult {
    if (result.estimated_time) return {timeoutMS: (result.estimated_time + 1) * 1000};
    if (result.error) throw result.error;
    return {text: result[0]?.label || ''};
  }
}
