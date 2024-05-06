import type {intelliChatOpenAITextRequestBody} from '../../../types/intelliChatTextRequestBody';
import type {StabilityAITextToImageResult} from 'intelli-chat/dist/types/stabilityAIResult';
import type {RequestHandler} from '@sveltejs/kit';

export const config = {
  runtime: 'edge',
};

// Make sure to set the STABILITY_API_KEY environment variable

export const POST: RequestHandler = async ({request}) => {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  const textRequestBody = (await request.json()) as intelliChatOpenAITextRequestBody;
  console.log(textRequestBody);

  const descriptionBody = {text_prompts: [{text: textRequestBody.messages[0].text}]};

  const result = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(descriptionBody),
  });

  const stabilityAIResult = (await result.json()) as StabilityAITextToImageResult;
  if (stabilityAIResult.message) throw stabilityAIResult.message;
  // Sends response back to intelli Chat using the Response format:
  // https://intellichat.dev/docs/connect/#Response
  return new Response(
    JSON.stringify({
      files: [{type: 'image', src: `data:image/png;base64,${stabilityAIResult.artifacts[0].base64}`}],
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
};
