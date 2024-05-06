import {FileMessageUtils} from '../../views/chat/messages/fileMessageUtils';
import {MessageContentI} from '../../types/messagesInternal';
import {intelliChat} from '../../intelliChat';
import {Legacy} from '../legacy/legacy';

export class FireEvents {
  public static onMessage(intelliChat: intelliChat, message: MessageContentI, isHistory: boolean) {
    const updateBody = JSON.parse(JSON.stringify({message, isHistory, isInitial: isHistory}));
    FileMessageUtils.reAddFileRefToObject(message, updateBody);
    intelliChat.onMessage?.(updateBody);
    intelliChat.dispatchEvent(new CustomEvent('message', {detail: updateBody}));
    Legacy.fireOnNewMessage(intelliChat, updateBody);
  }

  public static onClearMessages(intelliChat: intelliChat) {
    intelliChat.onClearMessages?.();
    intelliChat.dispatchEvent(new CustomEvent('clear-messages'));
  }

  public static onRender(intelliChat: intelliChat) {
    intelliChat.onComponentRender?.(intelliChat);
    intelliChat.dispatchEvent(new CustomEvent('render', {detail: intelliChat}));
  }

  public static onError(intelliChat: intelliChat, error: string) {
    intelliChat.onError?.(error);
    intelliChat.dispatchEvent(new CustomEvent('error', {detail: error}));
  }
}
