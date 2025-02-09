package puggysoft.requests;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.util.Map;

/** Request class. */
public final class RequestPut {

  private static final RequestSpecification REQUEST_SPECIFICATION = RequestConfig.getRequestSpecification();

  /** Private constructor.*/
  private RequestPut() {}

  /** This method perform PUT request.*/
  protected static Response request(
    String endpoint,
    Map<String, String> body,
    Map<String, String> params
  ) {
    return RestAssured
      .given()
      .spec(REQUEST_SPECIFICATION)
      .params(params)
      .body(body)
      .when()
      .put(endpoint);
  }
}
