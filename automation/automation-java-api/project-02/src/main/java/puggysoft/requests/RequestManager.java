package puggysoft.requests;

import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;

/** Request manager class. */
public final class RequestManager {

  public static Map<String, String> currentParams;
  public static Map<String, String> currentBody;

  /** Private constructor.*/
  private RequestManager() {}

  /** This method perform a GET request based in parameters.*/
  public static Response get(String endpoint, Map<String, String> params) {
    currentParams = params;
    if (params == null) {
      params = new HashMap<>();
    }
    return RequestGet.request(endpoint, params);
  }

  /** This method perform a POST request based in parameters.*/
  public static Response post(
    String endpoint,
    Map<String, String> body,
    Map<String, String> params
  ) {
    currentParams = params;
    currentBody = body;
    if (body == null) {
      body = new HashMap<>();
    }
    if (params == null) {
      params = new HashMap<>();
    }
    return RequestPost.request(endpoint, body, params);
  }

  /** This method perform a PUT request based in parameters.*/
  public static Response put(
    String endpoint,
    Map<String, String> body,
    Map<String, String> params
  ) {
    currentParams = params;
    currentBody = body;
    if (body == null) {
      body = new HashMap<>();
    }
    if (params == null) {
      params = new HashMap<>();
    }
    return RequestPut.request(endpoint, body, params);
  }

  /** This method perform a DELETE request based in parameters.*/
  public static Response delete(String endpoint, Map<String, String> params) {
    currentParams = params;
    if (params == null) {
      params = new HashMap<>();
    }
    return RequestDelete.request(endpoint, params);
  }
}
