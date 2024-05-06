import {intelliChatTextRequestBody} from '../../../../types/intelliChatTextRequestBody';
import errorHandler from '../../../../utils/errorHandler';
import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

async function handler(req: NextRequest) {
  // Text messages are stored inside request body using the intelli Chat JSON format:
  // https://intellichat.dev/docs/connect
  const messageRequestBody = (await req.json()) as intelliChatTextRequestBody;
  console.log(messageRequestBody);
  // Sends response back to intelli Chat using the Response format:
  // https://intellichat.dev/docs/connect/#Response
  return NextResponse.json({text: 'This is a response from a NextJS edge server. Thank you for your message!'});
}

export const POST = errorHandler(handler);
