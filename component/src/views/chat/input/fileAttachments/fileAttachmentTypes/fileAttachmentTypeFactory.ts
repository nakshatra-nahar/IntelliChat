import {FileAttachments} from '../../../../../types/fileAttachments';
import {ServiceFileTypes} from '../../../../../services/serviceIO';
import {AudioFileAttachmentType} from './audioFileAttachmentType';
import {FileAttachmentsType} from './fileAttachmentsType';
import {intelliChat} from '../../../../../intelliChat';

export class FileAttachmentTypeFactory {
  // prettier-ignore
  public static create(intelliChat: intelliChat, files: FileAttachments, toggleContainer: (display: boolean) => void,
      container: HTMLElement, type: keyof ServiceFileTypes) {
    if (type === 'audio') {
      return new AudioFileAttachmentType(intelliChat, files, toggleContainer, container);
    }
    return new FileAttachmentsType(intelliChat, files, toggleContainer, container);
  }
}
