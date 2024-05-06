package com.server.huggingFace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import com.server.utils.types.intelliChatRequestBody;
import com.server.utils.types.intelliChatTextRespose;
import java.util.List;

// Make sure to set the HUGGING_FACE_API_KEY environment variable in application.properties

@RestController
public class HuggingFaceController {
  @Autowired
  private HuggingFaceService huggingFaceService;

  @PostMapping("/huggingface-conversation")
  public intelliChatTextRespose conversation(@RequestBody intelliChatRequestBody requestBody) throws Exception {
    return this.huggingFaceService.conversation(requestBody);
  }

  @PostMapping("/huggingface-image")
  public intelliChatTextRespose imageClassification(@RequestPart("files") List<MultipartFile> files) throws Exception {
    return this.huggingFaceService.imageClassification(files);
  }

  @PostMapping("/huggingface-speech")
  public intelliChatTextRespose speechRecognition(@RequestPart("files") List<MultipartFile> files) throws Exception {
    return this.huggingFaceService.speechRecognition(files);
  }
}
