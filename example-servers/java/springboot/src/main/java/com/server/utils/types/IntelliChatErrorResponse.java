package com.server.utils.types;

public class intelliChatErrorResponse {
  private String error;

  public intelliChatErrorResponse(String error) {
    this.error = error;
  }

  public String getError() {
    return this.error;
  }
}