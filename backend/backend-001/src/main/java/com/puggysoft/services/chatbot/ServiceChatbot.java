package com.puggysoft.services.chatbot;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceChatbot {

  private final String ollamaUrl;
  private final String ollamaModel;
  private final String chatbotPrompt;
  private final ObjectMapper mapper = new ObjectMapper();

  /** Service chatbot. */
  public ServiceChatbot(@Value("${ollama.url}") String ollamaUrl, @Value("${ollama.model}") String ollamaModel, ChatbotPromptLoader promptLoader) {
    this.ollamaUrl = ollamaUrl;
    this.ollamaModel = ollamaModel;
    this.chatbotPrompt = promptLoader.getPrompt();
  }

  /** chatbot chat. */
  public ResponseEntity<String> chat(String message) {
    if (message == null || message.trim().isEmpty()) {
      return ResponseEntity.badRequest().body("El mensaje no puede estar vacío.");
    }
    HttpURLConnection connection = null;
    try {
      Map<String, Object> request = new HashMap<String, Object>();
      request.put("model", ollamaModel);
      List<Map<String, String>> messages = Arrays.asList(
          createMessage("system", chatbotPrompt),
          createMessage("user", message)
      );
      request.put("messages", messages);
      request.put("stream", false);
      URL url = new URL(ollamaUrl + "/api/chat");
      connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("POST");
      connection.setRequestProperty("Content-Type", MediaType.APPLICATION_JSON_VALUE);
      connection.setConnectTimeout(10000);
      connection.setReadTimeout(120000);
      connection.setDoOutput(true);
      java.io.OutputStream output = connection.getOutputStream();
      try {
        mapper.writeValue(output, request);
      } finally {
        output.close();
      }
      int status = connection.getResponseCode();
      InputStream responseStream = status >= 200 && status < 300
          ? connection.getInputStream()
          : connection.getErrorStream();

      String responseBody = "";

      if (responseStream != null) {
        responseBody = readInputStream(responseStream);
        responseStream.close();
      }

      return ResponseEntity.status(status)
          .contentType(MediaType.APPLICATION_JSON)
          .body(responseBody);

    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .contentType(MediaType.APPLICATION_JSON)
          .body("{\"error\":\"No se pudo conectar con Ollama\",\"message\":\"" + escapeJson(e.getMessage()) + "\"}");
    } finally {
      if (connection != null) {
        connection.disconnect();
      }
    }
  }

  /** Read input stream. */
  private String readInputStream(InputStream inputStream) throws Exception {
    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    byte[] buffer = new byte[4096];
    int length;
    while ((length = inputStream.read(buffer)) != -1) {
      outputStream.write(buffer, 0, length);
    }
    return new String(outputStream.toByteArray(), StandardCharsets.UTF_8);
  }

  /** Escape Json. */
  private String escapeJson(String value) {
    if (value == null) {
      return "";
    }
    return value.replace("\\", "\\\\")
        .replace("\"", "\\\"")
        .replace("\n", "\\n")
        .replace("\r", "\\r");
  }

  /** Create Message. */
  private Map<String, String> createMessage(String role, String content) {
    Map<String, String> message = new HashMap<String, String>();
    message.put("role", role);
    message.put("content", content);
    return message;
  }
}
