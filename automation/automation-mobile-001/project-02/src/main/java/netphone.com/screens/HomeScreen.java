package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Login Screen.
 */
public class HomeScreen extends Screen {

  /** Constructor. */
  public HomeScreen() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"HOME\"]")
  public MobileElement homeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Calls\"]")
  public MobileElement callsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Messenger\"]")
  public MobileElement messengerText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Meetings\"]")
  public MobileElement meetingsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Contacts\"]")
  public MobileElement contactsText;

}
