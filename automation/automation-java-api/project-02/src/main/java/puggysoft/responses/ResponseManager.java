package puggysoft.responses;

import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;

/** Response class. */
public final class ResponseManager {

  private static ResponseManager instance;
  private Response currentResponse;
  private Map<String, Response> responsesMap;

  /** Private constructor.*/
  private ResponseManager() {
    this.responsesMap = new HashMap<>();
  }

  /** get singleton. */
  private static ResponseManager getInstance() {
    if (instance == null) {
      instance = new ResponseManager();
    }
    return instance;
  }

  public static void addResponse(String key, Response response) {
    getInstance().responsesMap.put(key, response);
  }

  public static void addResponse(Response response) {
    getInstance().currentResponse = response;
  }

  public static Response findResponse(String key) {
    return getInstance().responsesMap.get(key);
  }

  public static Response getCurrentResponse() {
    return getInstance().currentResponse;
  }

  public static void storeResponse(String key, Response response) {
    getInstance().responsesMap.put(key, response);
  }
}
