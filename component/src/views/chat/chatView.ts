import {ElementUtils} from '../../utils/element/elementUtils';
import {Websocket} from '../../utils/HTTP/websocket';
import {ServiceIO} from '../../services/serviceIO';
import {Messages} from './messages/messages';
import {intelliChat} from '../../intelliChat';
import {Input} from './input/input';

export class ChatView {
  private static createElements(intelliChat: intelliChat, serviceIO: ServiceIO, panel?: HTMLElement) {
    const containerElement = document.createElement('div');
    containerElement.id = 'chat-view';
    const messages = new Messages(intelliChat, serviceIO, panel);
    if (serviceIO.websocket) Websocket.createConnection(serviceIO, messages);
    const userInput = new Input(intelliChat, messages, serviceIO, containerElement);
    ElementUtils.addElements(containerElement, messages.elementRef, userInput.elementRef);
    return containerElement;
  }

  public static render(intelliChat: intelliChat, containerRef: HTMLElement, serviceIO: ServiceIO, panel?: HTMLElement) {
    const containerElement = ChatView.createElements(intelliChat, serviceIO, panel);
    containerRef.replaceChildren(containerElement);
  }
}
