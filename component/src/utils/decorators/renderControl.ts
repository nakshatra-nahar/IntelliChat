import {InternalHTML} from '../webComponent/internalHTML';

export class RenderControl {
  private static waitForPropertiesToBeUpdatedBeforeRender(intelliChat: InternalHTML) {
    intelliChat._propUpdated_ = false;
    setTimeout(() => {
      if (!intelliChat._propUpdated_) {
        intelliChat._waitingToRender_ = false;
        intelliChat.onRender();
      } else {
        RenderControl.waitForPropertiesToBeUpdatedBeforeRender(intelliChat);
      }
    });
  }

  public static attemptRender(intelliChat: InternalHTML) {
    intelliChat._propUpdated_ = true;
    if (!intelliChat._waitingToRender_) {
      intelliChat._waitingToRender_ = true;
      RenderControl.waitForPropertiesToBeUpdatedBeforeRender(intelliChat);
    }
  }
}
