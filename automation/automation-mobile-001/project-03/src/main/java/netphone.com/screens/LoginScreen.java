package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
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
  public MobileElement letsGetStarterButton;

  // Login Screen Part 2
  @AndroidFindBy(xpath = "//android.widget.TextView[@text='Welcome to']")
  public MobileElement welcomeText;

  @AndroidFindBy(xpath = "//android.view.View[@text='Login']")
  public MobileElement loginInputLabel;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Don't have an account?\"]")
  public MobileElement doNotHaveAccountText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text='Sign Up']")
  public MobileElement sigUpText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id='email']")
  public MobileElement emailInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text='NEXT']")
  public MobileElement nextButton;

  // Login Screen Part 3
  @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id='password']")
  public MobileElement passwordInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@text='LOGIN']")
  public MobileElement loginButton;

}
