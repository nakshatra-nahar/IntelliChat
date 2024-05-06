package com.server.cohere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.server.utils.types.intelliChatRequestBody;
import com.server.utils.types.intelliChatTextRespose;

// Make sure to set the COHERE_API_KEY environment variable in application.properties

@RestController
public class CohereController {
  @Autowired
  private CohereService cohereService;

  @PostMapping("/cohere-chat")
  public intelliChatTextRespose chat(@RequestBody intelliChatRequestBody requestBody) throws Exception {
    return this.cohereService.chat(requestBody);
  }

  @PostMapping("/cohere-generate")
  public intelliChatTextRespose generateText(@RequestBody intelliChatRequestBody requestBody) throws Exception {
    return this.cohereService.generateText(requestBody);
  }

  @PostMapping("/cohere-summarize")
  public intelliChatTextRespose sumamrizeText(@RequestBody intelliChatRequestBody requestBody) throws Exception {
    return this.cohereService.summarizeText(requestBody);
  }
}
