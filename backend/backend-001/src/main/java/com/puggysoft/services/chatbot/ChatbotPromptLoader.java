package com.puggysoft.services.chatbot;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.StreamUtils;

@Component
public class ChatbotPromptLoader {

  private final String prompt;

  /** Chatbot Prompt Loader. */
  public ChatbotPromptLoader(@Value("classpath:chatbot-prompts/chatbot-prompt-escuela-genesis.txt") Resource promptFile) {
    try (InputStream input = promptFile.getInputStream()) {
      this.prompt = StreamUtils.copyToString(input, StandardCharsets.UTF_8);
    } catch (IOException e) {
      throw new IllegalStateException("No se pudo cargar chatbot-prompt.txt", e);
    }
  }

  public String getPrompt() {
    return prompt;
  }
}
