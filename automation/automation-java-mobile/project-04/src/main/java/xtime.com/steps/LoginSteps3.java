package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.LoginActions3;


/**
 * Steps.
 */
public class LoginSteps3 {

  private final LoginActions3 loginActions3;

  /**
   * Constructor.
   */
  public LoginSteps3() {
    this.loginActions3 = new LoginActions3();
  }

  @Given("^I verify 'Return' button")
  public void thenVerifyReturnButton() {
    this.loginActions3.verifyReturnButton();
  }

  @Then("^I verify 'Password' label")
  public void thenVerifyPasswordLabel() {
    this.loginActions3.verifyPasswordLabel();
  }

  @Then("^I verify 'Show password' button")
  public void thenVerifyShowPasswordButton() {
    this.loginActions3.verifyShowPasswordButton();
  }

  @Then("^I verify 'Password' input")
  public void thenVerifyPasswordInput() {
    this.loginActions3.verifyPasswordInput();
  }

  @Then("^I verify 'Forgot password' screen3 button")
  public void thenVerifyForgotPassword2Button() {
    this.loginActions3.verifyForgotPasswordButton2();
  }

  @Then("^I verify 'Sign in' screen3 button")
  public void thenVerifySignInButton() {
    this.loginActions3.verifySignInButton();
  }

  @Then("^I verify 'Sign in' screen3 is enable button")
  public void thenVerifySignInButtonIsEnable() {
    this.loginActions3.verifySignInButtonIsEnable();
  }

  @Then("^I verify 'Sign in' screen3 is disable button")
  public void thenVerifySignInButtonIsDisable() {
    this.loginActions3.verifySignInButtonIsNotEnable();
  }

  @Then("^I click 'Sign in' screen3 button")
  public void thenClickSignInButton() {
    this.loginActions3.clickSignInButton();
  }

  @Then("^I verify 'Contact us' button")
  public void thenVerifyContactUsButton() {
    this.loginActions3.verifyContactUsButton();
  }

  @Then("^I verify 'Terms of use' button")
  public void thenVerifyTermsOfUseButton() {
    this.loginActions3.verifyTermsOfUseButton();
  }

  @Then("^I verify 'All rights reserved' text")
  public void thenVerifyAllRightsReservedText() {
    this.loginActions3.verifyAllRightsReservedText();
  }

  @Then("^I verify 'Privacy statement' button")
  public void thenVerifyPrivacyStatementButton() {
    this.loginActions3.verifyPrivacyStatementButton();
  }

  @Then("^I login with \"([^\"]*)\" password credential")
  public void thenLoginWithPassword(String password) {
    this.loginActions3.loginWithPassword(password);
  }

  @Then("^I set \"([^\"]*)\" password input")
  public void thenSetPasswordInput(String password) {
    this.loginActions3.setPassword(password);
  }

  @Then("^I clean 'Password' input")
  public void thenCleanPasswordInput() {
    this.loginActions3.cleanPasswordInput();
  }

}
