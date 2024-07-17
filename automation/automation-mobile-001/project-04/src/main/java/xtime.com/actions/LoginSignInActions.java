package xtime.com.actions;

public class LoginSignInActions extends  AbstractActions {

  public LoginActions1 loginActions1;
  public LoginActions2 loginActions2;
  public LoginActions3 loginActions3;

  /**
   * Constructor
   * */
  public LoginSignInActions() {
    this.loginActions1 = new LoginActions1();
    this.loginActions2 = new LoginActions2();
    this.loginActions3 = new LoginActions3();
  }

  /** Login sign in . */
  public void login() {
    this.loginActions1.verifyXtimeLogo();
    this.loginActions1.verifySignButton();
    this.loginActions1.clickSignButton();
    this.loginActions2.loginWithUsername(loginActions2.loginScreen2.userUsername);
    this.loginActions3.loginWithPassword(loginActions2.loginScreen2.userPassword);
  }

}
