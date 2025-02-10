package puggysoft.steps;

import cucumber.api.java.en.When;
import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;
import puggysoft.requests.RequestManager;
import puggysoft.requests.RequestType;
import puggysoft.responses.ResponseManager;
import puggysoft.storage.VariableInterpreter;

/** Class. */
public class StepRequest {

  /** Step definition constructor.*/
  public StepRequest() {}

  /**
   * Step definition to perform a GET or DELETE request.
   *
   * @param method is the request type.
   * @param param  is the specified end point.
   */
  @When("^a \"(GET|DELETE)\" request to \"([^\"]*)\"$")
  public void aRequestTo(RequestType method, String endpointBrackets) {
    String endpoint = VariableInterpreter.interpretUrl(endpointBrackets);
    Response response;
    switch (method) {
      case GET:
        response = RequestManager.get(endpoint, null);
        break;
      case DELETE:
        response = RequestManager.delete(endpoint, null);
        break;
      default:
        response = RequestManager.get(endpoint, null);
    }
    ResponseManager.addResponse(response);
  }

  /**
   * Step definition to perform a POST or PUT request.
   *
   * @param method is the request type.
   * @param param  is the specified end point.
   * @param map    is the map body content.
   */
  @When("^a \"(POST|PUT)\" request to \"([^\"]*)\" with$")
  public void aRequestToWith(
    RequestType method,
    String endpointBrackets,
    Map<String, String> bodyMapBrackets
  ) {
    Map<String, String> bodyBrackets = new HashMap<>(bodyMapBrackets);
    Map<String, String> body = new HashMap<>();
    String endpoint = VariableInterpreter.interpretUrl(endpointBrackets);
    for (String key : bodyBrackets.keySet()) {
      String value = bodyBrackets.get(key);
      value = VariableInterpreter.interpretText(value);
      body.put(key, value);
    }
    Response response;
    switch (method) {
      case POST:
        response = RequestManager.post(endpoint, body, null);
        break;
      case PUT:
        response = RequestManager.put(endpoint, body, null);
        break;
      default:
        response = RequestManager.post(endpoint, body, null);
    }
    ResponseManager.addResponse(response);
  }
}
