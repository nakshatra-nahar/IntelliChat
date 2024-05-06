import {HuggingFaceTextGenerationResult} from '../../types/huggingFaceResult';
import {HuggingFace} from '../../types/huggingFace';
import {HuggingFaceIO} from './huggingFaceIO';
import {Response} from '../../types/response';
import {intelliChat} from '../../intelliChat';

export class HuggingFaceTextGenerationIO extends HuggingFaceIO {
  constructor(intelliChat: intelliChat) {
    const config = intelliChat.directConnection?.huggingFace?.textGeneration as NonNullable<HuggingFace['textGeneration']>;
    const apiKey = intelliChat.directConnection?.huggingFace;
    super(intelliChat, 'Once upon a time', 'gpt2', config, apiKey);
  }

  override async extractResultData(result: HuggingFaceTextGenerationResult): Promise<Response> {
    if (result.error) throw result.error;
    return {text: result[0]?.generated_text || ''};
  }
}
