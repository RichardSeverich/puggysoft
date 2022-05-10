package com.complejo.support;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
* Test Support.
*/
public final class TestSupport {
  private static TestSupport singleton;

  /**
  * Constructor.
  */
  private TestSupport() {
  }

  /**
  * @return singleton.
  */
  public static TestSupport getInstance() {
    if (singleton == null) {
      singleton = new TestSupport();
    }
    return singleton;
  }

  /**
  * Maps an Object into a JSON String. Uses a Jackson ObjectMapper.
  *
  * @param object obj.
  * @return string in json format.
  */
  public String mapToJson(final Object object) {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      return objectMapper.writeValueAsString(object);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
  }
}
