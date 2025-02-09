package puggysoft.steps;

import cucumber.api.java.en.And;
import io.restassured.response.Response;
import java.util.Map;
import puggysoft.requests.RequestManager;
import puggysoft.responses.ResponseManager;
import puggysoft.storage.VariableList;

/** Steps Class. */
public class StepStore {

  /** Step definition constructor.*/
  public StepStore() {}

  /**
   * Step definition to store the response data to a shared variable.
   *
   * @param variableName the name of the variable.
   */
  @And("^stored response as \\[([^\"]*)]$")
  public void storedResponse(String variableName) {
    Response response = ResponseManager.getCurrentResponse();
    ResponseManager.storeResponse(variableName, response);
  }

  /**
   * Step definition to store the response data to a shared variable.
   *
   * @param responseKey the name of the variable.
   */
  @And("^stored body as \\[([^\"]*)]$")
  public void storedBody(String variableName) {
    Response response = ResponseManager.getCurrentResponse();
    VariableList.addVariable(variableName, response.jsonPath().get(""));
  }

  /**
   * Step definition to store the response and body.
   *
   * @param variableName the name of the variable.
   */
  @And("^stored as \\[([^\"]*)]$")
  public void storedResponseAndBody(String variableName) {
    Response response = ResponseManager.getCurrentResponse();
    ResponseManager.storeResponse(variableName, response);
    VariableList.addVariable(variableName, response.jsonPath().get(""));
  }

  @And("^stored resource as \\[([^\"]*)]$")
  public void storedEntity(String variableName) {
    Response response = ResponseManager.getCurrentResponse();
    Map<String, String> resource = RequestManager.currentBody;
    String id = response.getBody().asString();
    resource.put("id", id);
    VariableList.addVariable(variableName, resource);
  }
}
