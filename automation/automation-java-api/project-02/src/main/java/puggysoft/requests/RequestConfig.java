package puggysoft.requests;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;

/** Request Config.*/
public final class RequestConfig {

  private static RequestConfig singleton;
  private RequestSpecification requestSpecification;

  /** This is the constructor.*/
  private RequestConfig() {
    updateRequestSpecification();
  }

  /** Update. */
  private void updateRequestSpecification() {
    this.requestSpecification =
      new RequestSpecBuilder()
        .setBaseUri(RequestUrlProperties.getUrlBase())
        .addHeader("Authorization", RequestAuth.getToken())
        .addHeader("Content-Type", "application/json")
        .build();
  }

  /**
   * This method instantiate the singleton class.
   *
   * @return the singleton instance.
   */
  protected static RequestConfig getSingleton() {
    if (singleton == null) {
      singleton = new RequestConfig();
    }
    return singleton;
  }

  /**
   * This method return the Request Specification instance.
   * Uncomment these lines if you want to update token every time you call this method.
   *
   * @return the Request Specification instance.
   */
  protected static RequestSpecification getRequestSpecification() {
    // RequestAuth.getInstance().login();
    // getSingleton().updateRequestSpecification;
    return getSingleton().requestSpecification;
  }
}
