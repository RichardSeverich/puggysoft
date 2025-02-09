package puggysoft.requests;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.util.Map;

/** Request class. */
public final class RequestGet {

  private static final RequestSpecification REQUEST_SPECIFICATION = RequestConfig.getRequestSpecification();

  /** Private constructor.*/
  private RequestGet() {}

  /** This method perform a GET request.*/
  protected static Response request(String endpoint, Map<String, String> params) {
    return RestAssured
      .given()
      .spec(REQUEST_SPECIFICATION)
      .params(params)
      .when()
      .get(endpoint);
  }
}
