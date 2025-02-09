package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LoginScreen4 extends Screen {


  /**
   * Constructor.
   */
  public LoginScreen4() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Verify your identity\"]")
  public MobileElement verifyIdentityText;

  @AndroidFindBy(xpath = "//android.view.View[@text=\"How would you like to verify your identity?\"]")
  public MobileElement howVerifyIdentityText;

  @AndroidFindBy(xpath = "//android.widget.Button[@resource-id=\"button-verify-by-sms\"]")
  public MobileElement verifySmsButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Need help? Contact your dealer admin or view \"]")
  public MobileElement needHelpText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"FAQs\"]")
  public MobileElement fAQsButton;

}

