package com.puggysoft.controllers.chatbot;

import com.puggysoft.services.chatbot.ServiceChatbot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerChatbot {

  @Autowired
  private ServiceChatbot service;

  /** chatbot. */
  @PostMapping(path = "/api/v1/chatbot")
  public ResponseEntity<String> chat(@RequestBody String message) {
    return service.chat(message);
  }
}
