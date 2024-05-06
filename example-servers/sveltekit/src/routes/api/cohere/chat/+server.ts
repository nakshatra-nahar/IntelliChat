import type {intelliChatOpenAITextRequestBody} from '../../../types/intelliChatTextRequestBody';
import type {CohereChatResult} from 'intelli-chat/dist/types/cohereResult';
import type {MessageContent} from 'intelli-chat/dist/types/messages';
import type {RequestHandler} from '@sveltejs/kit';

export const config = {
  runtime: 'edge',
};

// Make sure to set the COHERE_API_KEY environment variable

export const POST: RequestHandler = async ({request}) => {
  const textRequestBody = (await request.json()) as intelliChatOpenAITextRequestBody;
  console.log(textRequestBody);

  const chatBody = createChatBody(textRequestBody.messages);

  const result = await fetch('https://api.cohere.ai/v1/chat', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(chatBody),
  });

  const cohereResult = (await result.json()) as CohereChatResult;
  if (cohereResult.message) throw cohereResult.message;
  // Sends response back to intelli Chat using the Response format:
  // https://intellichat.dev/docs/connect/#Response
  return new Response(JSON.stringify({text: cohereResult.text}), {
    headers: {
      'content-type': 'application/json',
    },
  });
};

function createChatBody(messages: MessageContent[]) {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  return {
    query: messages[messages.length - 1].text,
    chat_history: messages.slice(0, messages.length - 1).map((message) => {
      return {user_name: message.role === 'ai' ? 'CHATBOT' : 'USER', text: message.text};
    }),
  };
}
