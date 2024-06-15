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
    if (loginType.equals("ADMIN")) {
      this.loginActions.loginWithAdminCredentials();
    } else {
      this.loginActions.loginWithUserCredentials();
    }
  }

  @Given("^I login with \"([^\"]*)\" and \"([^\"]*)\" credentials")
  public void loginWith(String email, String password) {
    this.loginActions.loginWith(email, password);
  }

  // SCREEN 1
  @Then("^I verify 'Welcome to' text")
  public void thenVerifyWelcomeTo() {
    this.loginActions.verifyWelcomeToText();
  }

  @Given("^I verify Lets Get Started Button")
  public void verifyLetsStartButton() {
    this.loginActions.verifyLetsStartButton();
  }

  @Then("^I click Lets Get Started Button")
  public void clickLetsStartButton() {
    this.loginActions.clickLetsStartButton();
  }

  // SCREEN 2
  @Then("^I verify 'Login' text")
  public void verifyLoginText() {
    this.loginActions.verifyLoginText();
  }

  @Then("^I verify 'Next' button")
  public void verifyNextButton() {
    this.loginActions.verifyNextButton();
  }

  @Then("^I verify Next button is disabled")
  public void verifyNextButtonDisabled() {
    this.loginActions.verifyNextButtonDisabled();
  }

  @Then("^I set \"([^\"]*)\" email")
  public void setInvalidEmail(String email) {
    this.loginActions.setEmail(email);
  }

  @Then("^I verify email error message")
  public void verifyEmailErrorMessage() {
    this.loginActions.verifyEmailErrorMessage();
  }

  @Then("^I verify Next button is enabled")
  public void verifyNextButtonEnabled() {
    this.loginActions.verifyNextButtonEnabled();
  }

  @Then("^I click 'Next' button")
  public void clickNextButton() {
    this.loginActions.clickNextButton();
  }

  // SCREEN 3

  @Then("^I verify 'Login' button")
  public void verifyLoginButton() {
    this.loginActions.verifyLoginButton();
  }

  @Then("^I verify Login button is disabled")
  public void verifyLoginButtonDisabled() {
    this.loginActions.verifyLoginButtonDisabled();
  }

  @Then("^I verify 'Forgot Password' text")
  public void verifyForgotPasswordText() {
    this.loginActions.verifyForgotPasswordText();
  }

  @Then("^I verify 'Please contact your authentication provider.' text")
  public void verifyContactProviderText() {
    this.loginActions.verifyContactProviderText();
  }

  @Then("^I set \"([^\"]*)\" password")
  public void setPassword(String password) {
    this.loginActions.setPassword(password);
  }

  @Then("^I verify Login button is enabled")
  public void verifyLoginButtonEnabled() {
    this.loginActions.verifyLoginButtonEnabled();
  }

  @Then("^I click 'Login' button")
  public void clickLoginButton() {
    this.loginActions.clickLoginButton();
  }

  @Then("^I verify 'Password' error message")
  public void verifyPasswordErrorMessage() {
    this.loginActions.verifyPasswordErrorMessage();
  }

}
