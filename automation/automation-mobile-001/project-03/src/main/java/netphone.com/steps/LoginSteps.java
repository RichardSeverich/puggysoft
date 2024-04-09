package netphone.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import netphone.com.actions.LoginActions;


/**
 * Steps.
 */
public class LoginSteps {

  private final LoginActions loginActions;

  /**
   * Constructor.
   */
  public LoginSteps() {
    this.loginActions = new LoginActions();
  }

  /**
   *
   * @param loginType admin, user.
   */
  @Given("^I login with \"(ADMIN|USER)\" credentials")
  public void login(String loginType) {
    if(loginType.equals("ADMIN")) {
      this.loginActions.loginWithAdminCredentials();
    } else {
      this.loginActions.loginWithUserCredentials();
    }
  }

  /**
   * Close session.
   */
  @Then("^I close session$")
  public void closeSession() {
    this.loginActions.loginScreen.endSession();
  }

}
