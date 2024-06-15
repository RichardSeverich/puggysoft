package netphone.com.actions;

import netphone.com.screens.LoginScreen;
import org.openqa.selenium.Keys;

/**
 * Login Actions.
 */
public class LoginActions extends AbstractActions {

  public LoginScreen loginScreen;

  /**
   * Constructor.
   */
  public LoginActions() {
    this.loginScreen = new LoginScreen();
  }

  /**
   *
   * @param username username.
   * @param password password.
   */
  public void loginWith(String username, String password) {
    // Part 1
    this.waitForDisplayed(this.loginScreen.letsGetStarterButton);
    this.loginScreen.letsGetStarterButton.click();
    // Part 2
    this.waitForDisplayed(this.loginScreen.emailInput);
    this.loginScreen.emailInput.click();
    this.loginScreen.emailInput.sendKeys(username);
    this.waitForDisplayed(this.loginScreen.nextButton);
    this.loginScreen.nextButton.click();
    // Part 3
    this.waitForDisplayed(this.loginScreen.passwordInput);
    this.loginScreen.passwordInput.click();
    this.loginScreen.passwordInput.sendKeys(password);
    this.waitForDisplayed(this.loginScreen.loginButton);
    this.loginScreen.loginButton.click();
  }

  /** Login with admin credentials. */
  public void loginWithAdminCredentials() {
    this.loginWith(this.loginScreen.adminUsername, this.loginScreen.adminPassword);
  }

  /** Login with user credentials. */
  public void loginWithUserCredentials() {
    this.loginWith(this.loginScreen.userUserName, this.loginScreen.userPassword);
  }

  // SCREEN 1

  /** Verify welcome to text. */
  public void verifyWelcomeToText() {
    this.verifyElementDisplayedAndText(this.loginScreen.welcomeToText, "Welcome to");
  }

  /** Verify Let's Start Button. */
  public void verifyLetsStartButton() {
    this.verifyElementDisplayedAndText(this.loginScreen.letsGetStarterButton, "LET'S GET STARTED");
  }

  /** Click lets get started button. */
  public void clickLetsStartButton() {
    this.loginScreen.letsGetStarterButton.click();
  }

  // SCREEN 2

  /** Verify Login Text. */
  public void verifyLoginText() {
    this.verifyElementDisplayedAndText(this.loginScreen.loginInputLabel, "Login");
  }

  /** Verify next button */
  public void verifyNextButton() {
    this.verifyElementDisplayedAndText(this.loginScreen.nextButton, "NEXT");
  }

  /** Verify next button disabled. */
  public void verifyNextButtonDisabled() {
    this.verifyElementIsNotEnable(this.loginScreen.nextButton);
  }

  /** Set email. */
  public void setEmail(String email) {
    this.waitForDisplayed(this.loginScreen.emailInput);
    this.loginScreen.emailInput.click();
    this.loginScreen.emailInput.sendKeys(Keys.CONTROL + "a");
    this.loginScreen.emailInput.sendKeys(Keys.DELETE);
    this.loginScreen.emailInput.sendKeys(email);
  }

  /** Verify email error message. */
  public void verifyEmailErrorMessage() {
    this.verifyElementDisplayedAndText(this.loginScreen.emailInputErrorMessage,
            "Email or username is incorrect.");
  }

  /** Verify next button is enabled. */
  public void verifyNextButtonEnabled() {
    this.verifyElementIsEnable(this.loginScreen.nextButton);
  }

  /** Click Next button. */
  public void clickNextButton() {
    this.loginScreen.nextButton.click();
  }

  // SCREEN 3

  /** Verify login button. */
  public void verifyLoginButton() {
    this.verifyElementDisplayedAndText(this.loginScreen.loginButton, "LOGIN");
  }

  /** Verify Login button disabled. */
  public void verifyLoginButtonDisabled() {
    this.verifyElementIsNotEnable(this.loginScreen.loginButton);
  }

  /** Verify login button is enabled. */
  public void verifyLoginButtonEnabled() {
    this.verifyElementIsEnable(this.loginScreen.loginButton);
  }

  /** Verify password error message. */
  public void verifyPasswordErrorMessage() {
    this.verifyElementDisplayedAndText(this.loginScreen.passwordInputErrorMessage, "Login / Password is incorrect.");
  }

  /** Verify forgot password text */
  public void verifyForgotPasswordText() {
    this.verifyElementDisplayedAndText(this.loginScreen.forgotPasswordText, "Forgot Password?");
  }

  /** Verify contact provider text */
  public void verifyContactProviderText() {
    this.verifyElementDisplayedAndText(this.loginScreen.contactProviderText, "Please contact your authentication provider.");
  }

  /** Set password */
  public void setPassword(String password) {
    this.waitForDisplayed(this.loginScreen.passwordInput);
    this.loginScreen.passwordInput.click();
    this.loginScreen.passwordInput.sendKeys(Keys.CONTROL + "a");
    this.loginScreen.passwordInput.sendKeys(Keys.DELETE);
    this.loginScreen.passwordInput.sendKeys(password);
  }

  /** Click Next button. */
  public void clickLoginButton() {
    this.loginScreen.loginButton.click();
  }

}
