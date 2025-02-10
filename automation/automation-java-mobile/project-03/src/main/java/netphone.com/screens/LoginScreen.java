package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import netphone.com.core.Screen;


/**
 * Login Screen.
 */
public class LoginScreen extends Screen {

  /** Constructor. */
  public LoginScreen() {
    super();
  }

  // Login Screen Part 1
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"LET'S GET STARTED\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"LET'S GET STARTED\"]")
  public MobileElement letsGetStarterButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text='Welcome to']")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Welcome to\"]")
  public MobileElement welcomeToText;

  // Login Screen Part 2
  @AndroidFindBy(xpath = "//android.view.View[@text='Login']")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Login\"]")
  public MobileElement loginInputLabel;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Don't have an account?\"]")
  public MobileElement doNotHaveAccountText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text='Sign Up']")
  public MobileElement sigUpText;

  // @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id='email']")
  @AndroidFindBy(xpath = "//android.widget.EditText")
  @iOSXCUITFindBy(xpath = "(//XCUIElementTypeTextField)[1]")
  public MobileElement emailInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text='NEXT']")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"NEXT\"]")
  public MobileElement nextButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Email or username is incorrect.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Email or username is incorrect.\"]")
  public MobileElement emailInputErrorMessage;

  // Login Screen Part 3
  // @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id='password']")
  @AndroidFindBy(xpath = "//android.widget.EditText")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeSecureTextField")
  public MobileElement passwordInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text='LOGIN']")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"LOGIN\"]")
  public MobileElement loginButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Login / Password is incorrect.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Login / Password is incorrect.\"]")
  public MobileElement passwordInputErrorMessage;

  // 4.0.0build518 -> @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Forgot Password?\"]")
  // 4.0.0build520 -> @AndroidFindBy(xpath = "//android.view.View[@text=\"Forgot Password?\"]")
  @AndroidFindBy(xpath = "//android.view.View[@text=\"Forgot Password?\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Forgot Password?\"]")
  public MobileElement forgotPasswordText;

  // 4.0.0build518 -> @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Please contact your authentication provider.\"]")
  // 4.0.0build520 -> @AndroidFindBy(xpath = "//android.view.View[@text=\"Please contact your authentication provider.\"]")
  @AndroidFindBy(xpath = "//android.view.View[@text=\"Please contact your authentication provider.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Please contact your authentication provider.\"]")
  public MobileElement contactProviderText;

}
