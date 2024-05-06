package com.server.openAI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import com.server.utils.types.intelliChatFileResponse;
import com.server.utils.types.intelliChatRequestBody;
import com.server.utils.types.intelliChatTextRespose;
import reactor.core.publisher.Flux;
import java.util.List;

// Make sure to set the OPENAI_API_KEY environment variable in application.properties

@RestController
public class OpenAIController {
  @Autowired
  private OpenAIService openAIService;

  @PostMapping("/openai-chat")
  public intelliChatTextRespose chat(@RequestBody intelliChatRequestBody requestBody) throws Exception {
    return this.openAIService.chat(requestBody);
  }

  @PostMapping("/openai-chat-stream")
  public Flux<intelliChatTextRespose> chatStream(@RequestBody intelliChatRequestBody requestBody) {
    return this.openAIService.chatStream(requestBody);
  }

  @PostMapping("/openai-image")
  public intelliChatFileResponse files(@RequestPart("files") List<MultipartFile> files) throws Exception {
    return this.openAIService.imageVariation(files);
  }
}
