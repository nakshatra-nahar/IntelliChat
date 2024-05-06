import {intelliChatTextRequestBody} from '../../../types/intelliChatTextRequestBody';
import errorHandler from '../../../utils/errorHandler';
import {NextRequest, NextResponse} from 'next/server';

export const config = {
  runtime: 'edge',
};

async function handler(req: NextRequest) {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  const messageRequestBody = (await req.json()) as intelliChatTextRequestBody;
  console.log(messageRequestBody);
  // Sends response back to intelli Chat using the Response format:
  // https://intellichat.dev/docs/connect/#Response
  return NextResponse.json({text: 'This is a respone from a NextJS edge server. Thankyou for your message!'});
}

export default errorHandler(handler);
