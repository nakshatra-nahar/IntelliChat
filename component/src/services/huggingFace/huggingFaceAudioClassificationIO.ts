import {HuggingFaceClassificationResult} from '../../types/huggingFaceResult';
import {HuggingFaceFileIO} from './huggingFaceFileIO';
import {HuggingFace} from '../../types/huggingFace';
import {PollResult} from '../serviceIO';
import {intelliChat} from '../../intelliChat';

export class HuggingFaceAudioClassificationIO extends HuggingFaceFileIO {
  // prettier-ignore
  constructor(intelliChat: intelliChat) {
    const config = intelliChat.directConnection?.huggingFace?.audioClassification as NonNullable<
      HuggingFace['audioClassification']
    >;
    const apiKey = intelliChat.directConnection?.huggingFace;
    super(intelliChat,
      'Attach an audio file', 'ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition', config, apiKey, {audio: {}});
  }

  async extractPollResultData(result: HuggingFaceClassificationResult): PollResult {
    if (result.estimated_time) return {timeoutMS: (result.estimated_time + 1) * 1000};
    if (result.error) throw result.error;
    return {text: result[0]?.label || ''};
  }
}
