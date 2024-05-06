import type {intelliChatTextRequestBody} from '../../../types/intelliChatTextRequestBody';
import type {RequestHandler} from '@sveltejs/kit';

export const config = {
  runtime: 'edge',
};

export const POST: RequestHandler = async ({request}) => {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  const messageRequestBody = (await request.json()) as intelliChatTextRequestBody;
  console.log(messageRequestBody);
  // Sends response back to intelli Chat using the Response format:
  // https://intellichat.dev/docs/connect/#Response
  return new Response(
    JSON.stringify({text: 'This is a respone from a SvelteKit edge server. Thankyou for your message!'}),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
};
