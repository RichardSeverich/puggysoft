package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LoginScreen2 extends Screen {


  /**
   * Constructor.
   */
  public LoginScreen2() {
    super();
  }

  @AndroidFindBy(xpath = "//android.webkit.WebView[@text=\"Cox Automotive Signin\"]/android.view.View/android.widget.TextView")
  public MobileElement coxAutomotiveText;

  @AndroidFindBy(xpath = "//android.widget.Image[contains(@text, \"Xtime\")]")
  public MobileElement xtimeLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Cancel\"]")
  public MobileElement cancelButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[contains(@text, \"Sign in to Xtime\")]")
  public MobileElement sigInIntoXtimeText;

  //android.view.View[@resource-id="username-label"]
  @AndroidFindBy(xpath = "//android.view.View[@text=\"Username\"]")
  public MobileElement usernameLabel;

  //android.widget.EditText[@resource-id="username"]
  @AndroidFindBy(xpath = "//android.widget.EditText")
  public MobileElement usernameInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Forgot\"]")
  public MobileElement forgotText;

  //android.widget.Button[@resource-id="forgotUsernameButton"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"username\"]")
  public MobileElement forgotUsernameButton;

  //android.widget.Button[@resource-id="passwordHintLink"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"password?\"]")
  public MobileElement forgotPasswordButton;

  //android.widget.Button[@resource-id="signIn"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Next\"]")
  public MobileElement nextButton;

}

