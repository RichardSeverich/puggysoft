package puggysoft.steps;

import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import org.testng.Assert;
import puggysoft.responses.ResponseManager;

/** Class containing Verification Steps.*/
public class StepAssert {

  /** Step definition constructor.*/
  public StepAssert() {}

  /**
   * Step definition that perform the assert of the status code.
   *
   * @param status the received expected status code.
   */
  @Then("^response status code should be (\\d+)$")
  public void theStatusCodeShouldBe(int status) {
    Response response = ResponseManager.getCurrentResponse();
    Assert.assertEquals(response.statusCode(), status);
  }

  /** Step definition that perform the assert.*/
  @Then("^response body has a field \"([^\"]*)\" with \"([^\"]*)\"$")
  public void verifyBodyFieldAndValue(String fieldName, String expectedResult) {
    Response response = ResponseManager.getCurrentResponse();
    this.verifyResponseBody(response, fieldName, expectedResult);
  }

  /** Step definition that perform the assert.*/
  @Then("^response \\[([^\"]*)] should have (\\d+) status code$")
  public void verifyStatusSpecificResponse(String responseName, int status) {
    Response repsonse = ResponseManager.findResponse(responseName);
    Assert.assertEquals(repsonse.statusCode(), status);
  }

  /** Step definition that perform the assert.*/
  @Then(
    "^response body \\[([^\"]*)] must have a field \"([^\"]*)\" with \"([^\"]*)\"$"
  )
  public void verifyBodySpecificResponse(
    String responseName,
    String fieldName,
    String expectedResult
  ) {
    Response response = ResponseManager.findResponse(responseName);
    this.verifyResponseBody(response, fieldName, expectedResult);
  }

  private void verifyResponseBody(
    Response response,
    String fieldName,
    String expectedResult
  ) {
    if (response.jsonPath().get(fieldName) != null) {
      String actualResult = response.jsonPath().get(fieldName).toString();
      Assert.assertEquals(actualResult, expectedResult);
    } else {
      Assert.fail("field doesn't exist");
    }
  }
}
