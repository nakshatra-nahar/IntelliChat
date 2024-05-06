package com.server.utils.types;

public class intelliChatRequestBody {
  private intelliChatRequestMessage[] messages;
  private String model;
  private Boolean stream;

  public intelliChatRequestMessage[] getMessages() {
    return this.messages;
  }

  public String getModel() {
    return this.model;
  }

  public Boolean getStream() {
    return this.stream;
  }
}
