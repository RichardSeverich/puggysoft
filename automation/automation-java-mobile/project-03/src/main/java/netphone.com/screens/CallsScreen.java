package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import netphone.com.core.Screen;

/**
 * Calls Screen.
 */
public class CallsScreen extends Screen {

  /** Constructor */
  public CallsScreen() {
    super();
  }

  //VOICEMAIL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Voicemails\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Voicemails\"]")
  public MobileElement voicemailsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Select\"]")
  @iOSXCUITFindBy(xpath = "(//XCUIElementTypeOther[@name=\"Select\"])")
  public MobileElement voicemailsSelectText;

  //MISSED
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Missed\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Missed\"]")
  public MobileElement missedText;

  //COMPANY BUTTON
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Company\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Company\"]")
  public MobileElement companyButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Today\"]")
    public MobileElement todayText;

  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Direct\"])[1]")
  public MobileElement phoneNumberUnderText;

  //MINE BUTTON
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Mine\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Mine\"]")
  public MobileElement mineButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Call history is empty\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Call history is empty\"]")
  public MobileElement callHistoryIsEmptyText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Here will be all your calls.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Here will be all your calls.\"]")
  public MobileElement callHistoryIsEmptyUnderText;

}
