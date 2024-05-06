package com.server.utils.types;

public class intelliChatTextRespose {
  private String text;

  public intelliChatTextRespose(String text) {
    if (text != null) {
      this.text = text;
    }
  }

  public String getText() {
    return text;
  }
}