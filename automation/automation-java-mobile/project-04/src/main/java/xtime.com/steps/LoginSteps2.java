package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.LoginActions2;


/**
 * Steps.
 */
public class LoginSteps2 {

  private final LoginActions2 loginActions2;

  /**
   * Constructor.
   */
  public LoginSteps2() {
    this.loginActions2 = new LoginActions2();
  }

  @Then("^I verify 'Cox Automotive' text")
  public void thenVerifyCoxAutomotiveText() {
    this.loginActions2.verifyCoxAutomotiveText();
  }

  @Then("^I verify 'Xtime logo' text")
  public void thenVerifyXtimeLogoText() {
    this.loginActions2.verifyXtimeLogoText();
  }

  @Then("^I verify 'Cancel' button")
  public void thenVerifyCancelButton() {
    this.loginActions2.verifyCancelButton();
  }

  @Then("^I click 'Cancel' button")
  public void thenClickCancelButton() {
    this.loginActions2.clickCancelButton();
  }

  @Then("^I verify 'Sign in Xtime' text")
  public void thenVerifySignInXtimeText() {
    this.loginActions2.verifySignXtimeText();
  }

  @Then("^I verify 'Username' label")
  public void thenVerifyUsernameLabel() {
    this.loginActions2.verifyUsernameLabel();
  }

  @Then("^I verify 'Username' input")
  public void thenVerifyUsernameInput() {
    this.loginActions2.verifyUsernameInput();
  }

  @Then("^I verify 'Forgot' text")
  public void thenVerifyForgotText() {
    this.loginActions2.verifyForgotText();
  }

  @Then("^I verify 'Forgot username' button")
  public void thenVerifyForgotUsernameButton() {
    this.loginActions2.verifyForgotUsernameButton();
  }

  @Then("^I verify 'Forgot password' button")
  public void thenVerifyForgotPasswordButton() {
    this.loginActions2.verifyForgotPasswordButton();
  }

  @Then("^I verify 'Next' button")
  public void thenVerifyNextButton() {
    this.loginActions2.verifyNextButton();
  }

  @Then("^I verify 'Next' is enable button")
  public void thenVerifyNextButtonIsEnable() {
    this.loginActions2.verifyNextButtonIsEnable();
  }

  @Then("^I verify 'Next' is disable button")
  public void thenVerifyNextButtonIsDisable() {
    this.loginActions2.verifyNextButtonIsNotEnable();
  }

  @Then("^I click 'Next' button")
  public void thenClickNextButton() {
    this.loginActions2.clickNextButton();
  }

  @Then("^I login with \"([^\"]*)\" username credential")
  public void thenLoginWithUsername(String username) {
    this.loginActions2.loginWithUsername(username);
  }

  @Then("^I set \"([^\"]*)\" username input")
  public void thenSetUsernameInput(String username) {
    this.loginActions2.setUsernameInput(username);
  }

  @Then("^I clean 'Username' input")
  public void thenCleanUsernameInput() {
    this.loginActions2.cleanUsernameInput();
  }

}
