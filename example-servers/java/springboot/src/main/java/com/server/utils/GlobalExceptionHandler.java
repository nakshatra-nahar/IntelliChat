package com.server.utils;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.server.utils.types.intelliChatErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

@ControllerAdvice
public class GlobalExceptionHandler {
  private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  @ExceptionHandler(Exception.class)
  public ResponseEntity<Object> globalExceptionHandler(Exception ex) {
    LOGGER.error("Exception:", ex);
    // Sends response back to intelli Chat using the Response format:
    // https://intellichat.dev/docs/connect/#Response
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new intelliChatErrorResponse("Server error"));
  }
}
