import {MessageContent} from 'intelli-chat/dist/types/messages';

export interface intelliChatTextRequestBody {
  messages: MessageContent[];
}

// model is added for OpenAI requests - check this file in the example ui project:
// https://github.com/OvidijusParsiunas/intelli-chat/blob/main/example-servers/ui/src/App.tsx
export type intelliChatOpenAITextRequestBody = intelliChatTextRequestBody & {model?: string};
