package xtime.com.steps;

import cucumber.api.java.en.Given;
import xtime.com.actions.LoginSignInActions;


/**
 * Steps.
 */
public class LoginSignInSteps {

  private final LoginSignInActions loginSignInActions;

  /**
   * Constructor.
   */
  public LoginSignInSteps() {
    this.loginSignInActions = new LoginSignInActions();
  }
  @Given("^I login with \"([^\"]*)\" credentials")
  public void loginWith(String loginType) {
    if (loginType.equals("USER1")) {
      this.loginSignInActions.login();
    }
  }
}
