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

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Home\"]")
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

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"All\"]")
  public MobileElement allText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Channels\"]")
  public MobileElement channelsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"There is nothing here\"]")
  public MobileElement thereIsNothingHereText;

  // PROFILE BUTTON
  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup")
  public MobileElement profileSettingsButton;
}
