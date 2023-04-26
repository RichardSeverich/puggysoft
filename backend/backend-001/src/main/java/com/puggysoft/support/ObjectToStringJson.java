package com.puggysoft.support;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * Test Support.
 */
public final class ObjectToStringJson {

  /**
   * Constructor.
   */
  private ObjectToStringJson() {
  }

  /**
   * Maps an Object into a JSON String. Uses a Jackson ObjectMapper.
   *
   * @param object obj.
   * @return string in json format.
   */
  public static String convert(final Object object) {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      return objectMapper.writeValueAsString(object);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }
}
