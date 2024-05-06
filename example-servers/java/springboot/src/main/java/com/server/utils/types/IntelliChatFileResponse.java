package com.server.utils.types;

import java.util.List;

public class intelliChatFileResponse {
  private List<intelliChatFile> files;

  public intelliChatFileResponse(List<intelliChatFile> files) {
    if (files != null) {
      this.files = files;
    }
  }

  public List<intelliChatFile> getFiles() {
    return files;
  }
}