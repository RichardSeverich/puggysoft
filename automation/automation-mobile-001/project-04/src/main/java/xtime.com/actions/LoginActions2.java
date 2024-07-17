package xtime.com.actions;

import org.openqa.selenium.Keys;
import xtime.com.screens.LoginScreen2;

public class LoginActions2 extends  AbstractActions {

  public LoginScreen2 loginScreen2;

  /**
   * Constructor
   * */
  public LoginActions2() {
    this.loginScreen2 = new LoginScreen2();
  }

  /** Verify cox automotive text. */
  public void verifyCoxAutomotiveText() {
    this.waitForDisplayed(this.loginScreen2.coxAutomotiveText);
  }

  /** Verify xtime logo text. */
  public void verifyXtimeLogoText() {
    this.waitForDisplayed(this.loginScreen2.xtimeLogoText);
  }

  /** Verify cancel button. */
  public void verifyCancelButton() {
    this.waitForDisplayed(this.loginScreen2.cancelButton);
  }

  /** Verify cancel button. */
  public void clickCancelButton() {
    this.loginScreen2.cancelButton.click();
  }

  /** Verify sign in to xtime text. */
  public void verifySignXtimeText() {
    this.waitForDisplayed(this.loginScreen2.sigInIntoXtimeText);
  }

  /** Verify username label. */
  public void verifyUsernameLabel() {
    this.verifyElementText(this.loginScreen2.usernameLabel, "Username");
  }

  /** Verify verify username input. */
  public void verifyUsernameInput() {
    this.waitForDisplayed(this.loginScreen2.usernameInput);
  }

  /** Set username input. */
  public void setUsernameInput(String username) {
    this.waitForDisplayed(this.loginScreen2.usernameInput);
    this.loginScreen2.usernameInput.click();
    this.loginScreen2.usernameInput.sendKeys(username);
  }

  /** Clean username input. */
  public void cleanUsernameInput() {
    this.waitForDisplayed(this.loginScreen2.usernameInput);
    this.loginScreen2.usernameInput.click();
    this.loginScreen2.usernameInput.sendKeys(Keys.CONTROL + "a");
    this.loginScreen2.usernameInput.sendKeys(Keys.DELETE);
  }

  /** Verify forgot text. */
  public void verifyForgotText() {
    this.waitForDisplayed(this.loginScreen2.forgotText);
  }

  /** Verify forgot username button. */
  public void verifyForgotUsernameButton() {
    this.verifyElementText(this.loginScreen2.forgotUsernameButton, "username");
  }

  /** Verify forgot password button. */
  public void verifyForgotPasswordButton() {
    this.verifyElementText(this.loginScreen2.forgotPasswordButton, "password?");
  }

  /** Verify next button. */
  public void verifyNextButton() {
    this.waitForDisplayed(this.loginScreen2.nextButton);
  }

  /** Verify next button is enable. */
  public void verifyNextButtonIsEnable() {
    this.verifyElementIsEnable(this.loginScreen2.nextButton);
  }

  /** Verify next button is not enable. */
  public void verifyNextButtonIsNotEnable() {
    this.verifyElementIsNotEnable(this.loginScreen2.nextButton);
  }

  /** Click next button. */
  public void clickNextButton() {
    this.loginScreen2.nextButton.click();
  }

  /** Login. */
  public void loginWithUsername(String username) {
    this.waitForDisplayed(this.loginScreen2.usernameInput);
    this.loginScreen2.usernameInput.click();
    this.loginScreen2.usernameInput.sendKeys(username);
    this.waitForDisplayed(this.loginScreen2.nextButton);
    this.loginScreen2.nextButton.click();
  }

}
