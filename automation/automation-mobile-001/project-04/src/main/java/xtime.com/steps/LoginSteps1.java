package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.LoginActions1;


/**
 * Steps.
 */
public class LoginSteps1 {

  private final LoginActions1 loginActions1;

  /**
   * Constructor.
   */
  public LoginSteps1() {
    this.loginActions1 = new LoginActions1();
  }

  @Given("^I verify 'Xtime logo' image")
  public void thenVerifyXtimeLogoImage() {
    this.loginActions1.verifyXtimeLogo();
  }

  @Then("^I hold touch 'Xtime logo' image")
  public void thenHoldTouchXtimeLogoImage() {
    this.loginActions1.holdTouchXtimeLogo();
  }

  @Then("^I verify 'Sign in' Button")
  public void thenVerifySignInButton() {
    this.loginActions1.verifySignButton();
  }

  @Then("^I click 'Sign in' Button")
  public void thenClickSignInButton() {
    this.loginActions1.clickSignButton();
  }

  @Then("^I verify 'Sign in options' Button")
  public void thenVerifySignInOptionsButton() {
    this.loginActions1.verifySignOptionsButton();
  }

}
