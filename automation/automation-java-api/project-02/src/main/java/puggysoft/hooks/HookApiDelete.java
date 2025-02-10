package puggysoft.hooks;

import cucumber.api.java.After;
import io.restassured.response.Response;
import puggysoft.requests.RequestManager;
import puggysoft.responses.ResponseManager;
import puggysoft.support.StringIsNumber;

/** Hook. */
public class HookApiDelete {

  /** Hook constructor.*/
  public HookApiDelete() {}

  private void apiDelete(String url) {
    Response response = ResponseManager.getCurrentResponse();
    String idToDelete = response.getBody().asString();
    if (StringIsNumber.verify(idToDelete)) {
      String endpoint = String.format(url, idToDelete);
      RequestManager.delete(endpoint, null);
    }
  }

  @After("@ApiDeleteUser")
  public void apiDeleteUser() {
    this.apiDelete("/users/%s");
  }

  @After("@ApiDeleteTenant")
  public void apiDeleteTenant() {
    this.apiDelete("/tenants/%s");
  }
}
