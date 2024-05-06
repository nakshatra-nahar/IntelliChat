import type {intelliChatOpenAITextRequestBody} from '../types/intelliChatTextRequestBody';

export function createReqChatBody(body: intelliChatOpenAITextRequestBody, stream?: boolean) {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  const chatBody = {
    messages: body.messages.map((message) => {
      return {role: message.role === 'ai' ? 'assistant' : message.role, content: message.text};
    }),
    model: body.model,
  } as {stream?: boolean};
  if (stream) chatBody.stream = true;
  return chatBody;
}
