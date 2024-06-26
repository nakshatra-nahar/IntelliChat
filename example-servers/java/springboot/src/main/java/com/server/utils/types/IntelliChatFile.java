package com.server.utils.types;

public class intelliChatFile {
  private String src;
  private String type;

  public intelliChatFile(String src, String type) {
    if (src != null) {
      this.src = src;
    }

    if (type != null) {
      this.type = type;
    }
  }

  public String getSrc() {
    return src;
  }

  public void setSrc(String src) {
    this.src = src;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }
}
