package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;

import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LoginScreen1 extends Screen {


  /**
   * Constructor.
   */
  public LoginScreen1() {
    super();
  }

  // ******* ******* ******* SCREEN 1 ******* ******* *******
  //@AndroidFindBy(xpath = "//android.widget.ImageView[@content-desc=\"xtime-logo\"]")
  @AndroidFindBy(xpath = "//android.widget.ImageView")
  public MobileElement xtimeLogoOne;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Sign in\"]")
  public MobileElement signInButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Sign in options\"]")
  public MobileElement signInOptionsButton;


/*
  // ******* ******* ******* SCREEN 2 ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Sign in to Xtime\"]")
  public MobileElement signInXtimeText;

  @AndroidFindBy(xpath = "//android.widget.Image[@text=\"Xtime logo\"]")
  public MobileElement xtimeLogoTwo;

  // Sign in Text
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Use your Xtime username and password or your \"]")
  public MobileElement signInTextPartOne;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Bridge ID\"]")
  public MobileElement signInTextPartTwo;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\" account if you have attached Xtime.\"]")
  public MobileElement signInTextPartThree;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Contact Us\"]")
  public MobileElement contactUs;

  // ******* ******* ******* SCREEN 2 ******* ******* *******
  @AndroidFindBy(xpath = "//android.webkit.WebView[@text=\"Cox Automotive Signin\"]")
  public MobileElement coxAutoMotiveTitle;

  @AndroidFindBy(xpath = "//android.view.View[@text=\"Username\"]")
  public MobileElement usernameLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText")
  public MobileElement usernameInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Next\"]")
  public MobileElement nextButton;

  // forgot password text
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Forgot\"]")
  public MobileElement forgotPasswordTextOne;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"username\"]")
  public MobileElement forgotPasswordTextTwo;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"password?\"]")
  public MobileElement forgotPasswordTextThree;

  // ******* ******* ******* SCREEN 3 ******* ******* *******
  String returnedUsernameAndroid = "//android.widget.Button[@text=\"← ${username}\"]";

  @AndroidFindBy(xpath = "//android.view.View[@text=\"Password\"]")
  public MobileElement passwordLabel;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Show Password\"]")
  public MobileElement showPasswordButton;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Hide Password\"]")
  public MobileElement hidePasswordButton;

  @AndroidFindBy(xpath = "//android.widget.EditText")
  public MobileElement passwordInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Sign in\"]")
  public MobileElement signInButtonLogin;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Forgot password?\"]")
  public MobileElement forgotPasswordText;*/

}

