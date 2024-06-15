package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Meetings Screen.
 */
public class MeetingsScreen extends Screen {

  /** Constructor. */
  public MeetingsScreen() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Integrations\"]")
  public MobileElement integrationsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Integrate your Google or Microsoft account to synchronize contacts and calendar.\"]")
  public MobileElement integrationsUnderText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Log in with Google\"]")
  public MobileElement gmailLoginButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Log in with Microsoft\"]")
  public MobileElement microsoftLoginButton;

}
