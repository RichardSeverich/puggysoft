package xtime.com.actions;

import xtime.com.screens.LoginScreen1;

public class LoginActions1 extends  AbstractActions {

  public LoginScreen1 loginScreen1;

  /**
   * Constructor
   * */
  public LoginActions1() {
    this.loginScreen1 = new LoginScreen1();
  }

  /** Verify Xtime logo. */
  public void verifyXtimeLogo() {
    this.waitForDisplayed(this.loginScreen1.xtimeLogoOne);
  }

  /** Hold touch Xtime logo. */
  public void holdTouchXtimeLogo() {
    this.holdTouchByMobileElement(this.loginScreen1.xtimeLogoOne, 60);
  }

  /** Verify sign in button. */
  public void verifySignButton() {
    this.waitForDisplayed(this.loginScreen1.signInButton);
  }

  /** Click sign in button. */
  public void clickSignButton() {
    this.loginScreen1.signInButton.click();
  }

  /** Verify sign options button. */
  public void verifySignOptionsButton() {
    this.waitForDisplayed(this.loginScreen1.signInOptionsButton);
  }
}
