import {ServiceIO} from '../../../services/serviceIO';
import {intelliChat} from '../../../intelliChat';

export class SetupMessages {
  public static getText(intelliChat: intelliChat, serviceIO: ServiceIO) {
    if (!intelliChat.directConnection && !intelliChat.connect && !intelliChat.webModel && !intelliChat.demo) {
      return `Connect to any API using the [connect](https://intellichat.dev/docs/connect#connect-1)
        property or a popular service via
        [directConnection](https://intellichat.dev/docs/directConnection/#directConnection).
        \n Host AI entirely on your browser via a [webModel](https://intellichat.dev/docs/webModel).
        \n To get started checkout the [Start](https://intellichat.dev/start) page and
        live code [examples](https://intellichat.dev/examples/frameworks).
        \n To remove this message set the [demo](https://intellichat.dev/docs/demo#demo) property to true.`;
    } else if (intelliChat.directConnection) {
      if (!serviceIO.isDirectConnection()) {
        return `Please define a valid service inside
          the [directConnection](https://intellichat.dev/docs/directConnection/#directConnection) object.`;
      }
      const openAIChat = intelliChat.directConnection.openAI?.chat;
      if (typeof openAIChat === 'object' && openAIChat.tools && !openAIChat.function_handler) {
        return (
          'Please define the `function_handler` property inside' +
          ` the openAI [chat](https://intellichat.dev/docs/directConnection/openAI#Chat) object.`
        );
      }
    } else if (intelliChat.connect) {
      // don't forget that when Demo mode is enabled - url is set to 'intelli-chat-demo'
      if (!intelliChat.connect.url && !intelliChat.connect.handler) {
        if (intelliChat.demo) {
          if (!intelliChat.connect.stream) {
            return (
              'When [demo](https://intellichat.dev/docs/demo) mode is enabled - ' +
              'the [connect](https://intellichat.dev/docs/connect#connect-1) ' +
              'object can only accept the [stream](https://intellichat.dev/docs/connect#Stream) property.'
            );
          }
          return null;
        }
        return (
          'Please define a `url` or a `handler` property inside ' +
          'the [connect](https://intellichat.dev/docs/connect#connect-1) object.'
        );
      }
    }
    return null;
  }
}
