package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LoginScreen3 extends Screen {


  /**
   * Constructor.
   */
  public LoginScreen3() {
    super();
  }

  //android.widget.Button[@text="← asd"]
  @AndroidFindBy(xpath = "//android.widget.Button[@resource-id=\"return-link\"]")
  public MobileElement returnLinkButton;

  //android.view.View[@resource-id="password-label"]
  @AndroidFindBy(xpath = "//android.view.View[@text=\"Password\"]")
  public MobileElement passwordLabel;

  //android.widget.Button[@resource-id="revealPassword"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Show Password\"]")
  public MobileElement showPasswordButton;

  //android.webkit.WebView[@text="Cox Automotive Signin"]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText
  @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id=\"password\"]")
  public MobileElement passwordInput;

  //android.widget.Button[@resource-id="forgotPasswordBtn"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Forgot password?\"]")
  public MobileElement forgotPasswordBtnButton;

  //android.widget.Button[@resource-id="signIn"]
  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Sign in\"]")
  public MobileElement signInButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Contact Us\"]")
  public MobileElement contactUsButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Terms of Use\"]")
  public MobileElement termsOfUseButton;

  @AndroidFindBy(xpath = "//android.view.View[@text=\"©2019 - 2024 Cox Automotive.All Rights Reserved.\"]")
  public MobileElement allRightsReservedText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Privacy Statement\"]")
  public MobileElement privacyStatementButton;
}

