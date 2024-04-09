package netphone.com.actions;

import netphone.com.screens.LoginScreen;

/**
 * Login Actions.
 */
public class LoginActions {

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
  private void loginWith(String username, String password) {
    // Part 1
    this.loginScreen
        .letsGetStarterButton
        .click();
    // Part 2
    this.loginScreen
        .emailInput
        .sendKeys(username);
    this.loginScreen
        .nextButton
        .click();
    // Part 3
    this.loginScreen
        .passwordInput
        .sendKeys(password);
    this.loginScreen
        .loginButton.click();
  }

  /**
   * Login with admin credentials.
   */
  public void loginWithAdminCredentials() {
    this.loginWith(this.loginScreen.adminUsername, this.loginScreen.adminPassword);
  }

  /**
   * Login with user credentials.
   */
  public void loginWithUserCredentials() {
    this.loginWith(this.loginScreen.userUserName, this.loginScreen.userPassword);
  }

}
