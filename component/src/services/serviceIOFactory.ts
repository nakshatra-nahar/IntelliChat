import {HuggingFaceAudioClassificationIO} from './huggingFace/huggingFaceAudioClassificationIO';
import {HuggingFaceImageClassificationIO} from './huggingFace/huggingFaceImageClassificationIO';
import {StabilityAIImageToImageUpscaleIO} from './stabilityAI/stabilityAIImageToImageUpscaleIO';
import {StabilityAIImageToImageMaskingIO} from './stabilityAI/stabilityAIImageToImageMaskingIO';
import {HuggingFaceAudioRecognitionIO} from './huggingFace/huggingFaceAudioRecognitionIO';
import {HuggingFaceTextGenerationIO} from './huggingFace/huggingFaceTextGenerationIO';
import {HuggingFaceQuestionAnswerIO} from './huggingFace/huggingFaceQuestionAnswerIO';
import {HuggingFaceSummarizationIO} from './huggingFace/huggingFaceSummarizationIO';
import {HuggingFaceConversationIO} from './huggingFace/huggingFaceConversationIO';
import {StabilityAIImageToImageIO} from './stabilityAI/stabilityAIImageToImageIO';
import {HuggingFaceTranslationIO} from './huggingFace/huggingFaceTranslationIO';
import {StabilityAITextToImageIO} from './stabilityAI/stabilityAITextToImageIO';
import {HuggingFaceFillMaskIO} from './huggingFace/huggingFaceFillMaskIO';
import {CohereTextGenerationIO} from './cohere/cohereTextGenerationIO';
import {CohereSummarizationIO} from './cohere/cohereSummarizationIO';
import {OpenAITextToSpeechIO} from './openAI/openAITextToSpeechIO';
import {OpenAISpeechToTextIO} from './openAI/openAISpeechToTextIO';
import {AzureSummarizationIO} from './azure/azureSummarizationIO';
import {AssemblyAIAudioIO} from './assemblyAI/assemblyAIAudioIO';
import {AzureTextToSpeechIO} from './azure/azureTextToSpeechIO';
import {AzureSpeechToTextIO} from './azure/azureSpeechToTextIO';
import {AzureTranslationIO} from './azure/azureTranslationIO';
import {OpenAIAssistantIO} from './openAI/openAIAssistantIO';
import {OpenAIImagesIO} from './openAI/openAIImagesIO';
import {BaseServiceIO} from './utils/baseServiceIO';
import {OpenAIChatIO} from './openAI/openAIChatIO';
import {CohereChatIO} from './cohere/cohereChatIO';
import {WebModel} from '../webModel/webModel';
import {MistralIO} from './mistral/mistralO';
import {ServiceIO} from './serviceIO';
import {intelliChat} from '../intelliChat';

// exercise caution when defining default returns for directConnection as their configs can be undefined
export class ServiceIOFactory {
  // this should only be called when no _activeService is set or is demo as otherwise we don't want to reconnect
  public static create(intelliChat: intelliChat): ServiceIO {
    const {directConnection, connect, demo, webModel} = intelliChat;
    if (webModel) {
      return new WebModel(intelliChat);
    }
    if (directConnection) {
      if (directConnection.openAI) {
        if (directConnection.openAI.images) {
          return new OpenAIImagesIO(intelliChat);
        }
        if (directConnection.openAI.speechToText) {
          return new OpenAISpeechToTextIO(intelliChat);
        }
        if (directConnection.openAI.textToSpeech) {
          return new OpenAITextToSpeechIO(intelliChat);
        }
        if (directConnection.openAI.assistant) {
          return new OpenAIAssistantIO(intelliChat);
        }
        return new OpenAIChatIO(intelliChat);
      }
      if (directConnection.assemblyAI) {
        return new AssemblyAIAudioIO(intelliChat);
      }
      if (directConnection.cohere) {
        if (directConnection.cohere.textGeneration) {
          return new CohereTextGenerationIO(intelliChat);
        }
        if (directConnection.cohere.summarization) {
          return new CohereSummarizationIO(intelliChat);
        }
        return new CohereChatIO(intelliChat);
      }
      if (directConnection.huggingFace) {
        if (directConnection.huggingFace.textGeneration) {
          return new HuggingFaceTextGenerationIO(intelliChat);
        }
        if (directConnection.huggingFace.summarization) {
          return new HuggingFaceSummarizationIO(intelliChat);
        }
        if (directConnection.huggingFace.translation) {
          return new HuggingFaceTranslationIO(intelliChat);
        }
        if (directConnection.huggingFace.fillMask) {
          return new HuggingFaceFillMaskIO(intelliChat);
        }
        if (directConnection.huggingFace.questionAnswer) {
          return new HuggingFaceQuestionAnswerIO(intelliChat);
        }
        if (directConnection.huggingFace.audioSpeechRecognition) {
          return new HuggingFaceAudioRecognitionIO(intelliChat);
        }
        if (directConnection.huggingFace.audioClassification) {
          return new HuggingFaceAudioClassificationIO(intelliChat);
        }
        if (directConnection.huggingFace.imageClassification) {
          return new HuggingFaceImageClassificationIO(intelliChat);
        }
        return new HuggingFaceConversationIO(intelliChat);
      }
      if (directConnection.azure) {
        if (directConnection.azure.speechToText) {
          return new AzureSpeechToTextIO(intelliChat);
        }
        if (directConnection.azure.textToSpeech) {
          return new AzureTextToSpeechIO(intelliChat);
        }
        if (directConnection.azure.summarization) {
          return new AzureSummarizationIO(intelliChat);
        }
        if (directConnection.azure.translation) {
          return new AzureTranslationIO(intelliChat);
        }
      }
      if (directConnection.stabilityAI) {
        if (directConnection.stabilityAI.imageToImage) {
          return new StabilityAIImageToImageIO(intelliChat);
        }
        if (directConnection.stabilityAI.imageToImageUpscale) {
          return new StabilityAIImageToImageUpscaleIO(intelliChat);
        }
        if (directConnection.stabilityAI.imageToImageMasking) {
          return new StabilityAIImageToImageMaskingIO(intelliChat);
        }
        return new StabilityAITextToImageIO(intelliChat);
      }
      if (directConnection.mistral) {
        return new MistralIO(intelliChat);
      }
    }
    // if connect, make sure it is not a demo stream
    if (connect && (!demo || !connect.stream)) {
      return new BaseServiceIO(intelliChat);
    }
    // when not directConnection and connect connection, we default to demo
    return new BaseServiceIO(intelliChat, undefined, demo || true);
  }
}
