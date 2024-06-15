package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
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
  public MobileElement voicemailsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Select\"]")
  public MobileElement voicemailsSelectText;

  //MISSED
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Missed\"]")
  public MobileElement missedText;

  //COMPANY BUTTON
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Company\"]")
  public MobileElement companyButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Today\"]")
    public MobileElement todayText;

  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Direct\"])[1]")
  public MobileElement phoneNumberUnderText;

  //MINE BUTTON
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Mine\"]")
  public MobileElement mineButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Call history is empty\"]")
  public MobileElement clearHistoryIsEmptyText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Here will be all your calls.\"]")
  public MobileElement clearHistoryIsEmptyUnderText;

}
