package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
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
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Home\"]")
  public MobileElement homeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Calls\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Calls\"]")
  public MobileElement callsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Messenger\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Messenger\"]")
  public MobileElement messengerText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Meetings\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Meetings\"]")
  public MobileElement meetingsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Contacts\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Contacts\"]")
  public MobileElement contactsText;

}
