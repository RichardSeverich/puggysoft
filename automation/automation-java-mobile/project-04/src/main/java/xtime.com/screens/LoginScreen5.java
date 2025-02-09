package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LoginScreen5 extends Screen {


  /**
   * Constructor.
   */
  public LoginScreen5() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Enter verification code\"]")
  public MobileElement enterVerificationCodeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\". This code will be valid for 5 minutes.\"]")
  public MobileElement durationVerificationCodeText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@resource-id=\"input-verification-code\"]")
  public MobileElement verificationCodeInput;

  @AndroidFindBy(xpath = "//android.widget.Button[@resource-id=\"button-resend-code\"]")
  public MobileElement resendCodeButton;

  @AndroidFindBy(xpath = "//android.widget.Button[@resource-id=\"button-go-back\"]")
  public MobileElement tryAnotherMethodButton;

  @AndroidFindBy(xpath = "//android.widget.Button[@resource-id=\"button-account-recovery-submit\"]")
  public MobileElement verifyCodeButton;

}

