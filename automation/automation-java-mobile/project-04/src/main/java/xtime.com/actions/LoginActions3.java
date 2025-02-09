package xtime.com.actions;

import org.openqa.selenium.Keys;
import xtime.com.screens.LoginScreen3;

public class LoginActions3 extends  AbstractActions {

  public LoginScreen3 loginScreen3;

  /**
   * Constructor
   * */
  public LoginActions3() {
    this.loginScreen3 = new LoginScreen3();
  }

  /** Verify return button. */
  public void verifyReturnButton() {
    this.waitForDisplayed(this.loginScreen3.returnLinkButton);
  }

  /** Verify password label. */
  public void verifyPasswordLabel() {
    this.waitForDisplayed(this.loginScreen3.passwordLabel);
  }

  /** Verify show password button. */
  public void verifyShowPasswordButton() {
    this.waitForDisplayed(this.loginScreen3.showPasswordButton);
  }

  /** Verify password input. */
  public void verifyPasswordInput() {
    this.waitForDisplayed(this.loginScreen3.passwordInput);
  }

  /** Verify forgot password button 2. */
  public void verifyForgotPasswordButton2() {
    this.waitForDisplayed(this.loginScreen3.forgotPasswordBtnButton);
  }

  /** Verify sign in button. */
  public void verifySignInButton() {
    this.waitForDisplayed(this.loginScreen3.signInButton);
  }

  /** Verify sign in button is enable. */
  public void verifySignInButtonIsEnable() {
    this.verifyElementIsEnable(this.loginScreen3.signInButton);
  }

  /** Verify sign in button is not enable. */
  public void verifySignInButtonIsNotEnable() {
    this.verifyElementIsNotEnable(this.loginScreen3.signInButton);
  }

  /** Click sign in button. */
  public void clickSignInButton() {
    this.loginScreen3.signInButton.click();
  }

  /** Verify contact us button. */
  public void verifyContactUsButton() {
    this.waitForDisplayed(this.loginScreen3.contactUsButton);
  }

  /** Verify terms of use button. */
  public void verifyTermsOfUseButton() {
    this.waitForDisplayed(this.loginScreen3.termsOfUseButton);
  }

  /** Verify all rights reserved text. */
  public void verifyAllRightsReservedText() {
    this.waitForDisplayed(this.loginScreen3.allRightsReservedText);
  }

  /** Verify privacy statement button. */
  public void verifyPrivacyStatementButton() {
    this.waitForDisplayed(this.loginScreen3.privacyStatementButton);
  }

  /** Login. */
  public void loginWithPassword(String password) {
    this.waitForDisplayed(this.loginScreen3.passwordInput);
    this.loginScreen3.passwordInput.click();
    this.loginScreen3.passwordInput.sendKeys(password);
    this.waitForDisplayed(this.loginScreen3.signInButton);
    this.loginScreen3.signInButton.click();
  }

  /** Set password input. */
  public void setPassword(String password) {
    this.waitForDisplayed(this.loginScreen3.passwordInput);
    this.loginScreen3.passwordInput.click();
    this.loginScreen3.passwordInput.sendKeys(password);
  }

  /** Clean password input. */
  public void cleanPasswordInput() {
    this.waitForDisplayed(this.loginScreen3.passwordInput);
    this.loginScreen3.passwordInput.click();
    this.loginScreen3.passwordInput.sendKeys(Keys.CONTROL + "a");
    this.loginScreen3.passwordInput.sendKeys(Keys.DELETE);
  }
}
