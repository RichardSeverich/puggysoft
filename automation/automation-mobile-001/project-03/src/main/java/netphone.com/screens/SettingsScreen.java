package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Settings Screen.
 */
public class SettingsScreen extends Screen {

  /** Constructor. */
  public SettingsScreen() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement exitSettingsButton;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView")
  public MobileElement settingsButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"SETTINGS\"]")
  public MobileElement settingsText;

  String profileImageTextAndroid = "//android.widget.TextView[@text=\"${userInitials}\"]";

  String profileNameTextAndroid = "//android.widget.TextView[@text=\"${userName}\"]";

  String profileMailTextAndroid = "//android.widget.TextView[@text=\"${userMail}\"]";

  String profileExtTextAndroid = "//android.widget.TextView[@text=\"Ext: ${userExt}\"]";

  //GENERAL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"General\"]")
  public MobileElement generalText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Time Zone\"]")
  public MobileElement timeZoneText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"EST\"]")
  public MobileElement timeZoneESTText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Call Forwarding\"]")
  public MobileElement callForwardingText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Off\"]")
  public MobileElement callForwardingOffText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Caller ID\"]")
  public MobileElement callerIdText;

  String callerIdNumberTextAndroid = "//android.widget.TextView[@text=\"${callerIdNumber}\"]";

  //DEVICE SETTINGS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Device Settings\"]")
  public MobileElement deviceSettingsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Silent Mode\"]")
  public MobileElement silentModeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Disables all notifications and incoming calls to this device.\"]")
  public MobileElement silentModeUnderText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Minutes Mode\"]")
  public MobileElement minutesModeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Calls will use your mobile plan minutes instead of data.\"]")
  public MobileElement minutesModeUnderText;

  //LEGAL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Legal\"]")
  public MobileElement legalText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Privacy Policy\"]")
  public MobileElement privacyPolicyText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Terms of Service\"]")
  public MobileElement termsOfServiceText;

  //APPLICATION
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Application\"]")
  public MobileElement applicationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Integrations\"]")
  public MobileElement integrationsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Advanced log reporting\"]")
  public MobileElement advancedLogReporting;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Log out\"]")
  public MobileElement logOutText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[3]/android.view.ViewGroup")
  public MobileElement logOutButton;

  public MobileElement getImageProfileText(String userInitials) {
    String xpath = this.profileImageTextAndroid.replace("${userInitials}", userInitials);
    return this.getElementByXpath(xpath);
  }

  public MobileElement getNameText(String userName) {
    String xpath = this.profileNameTextAndroid.replace("${userName}", userName);
    return this.getElementByXpath(xpath);
  }

  public MobileElement getMailText(String userMail) {
    String xpath = this.profileMailTextAndroid.replace("${userMail}", userMail);
    return this.getElementByXpath(xpath);
  }

  public MobileElement getExtText(String userExt) {
    String xpath = this.profileExtTextAndroid.replace("${userExt}", userExt);
    return this.getElementByXpath(xpath);
  }

  public MobileElement getCallerIdNumberText(String callerIdNumberText) {
    String xpath = this.callerIdNumberTextAndroid.replace("${callerIdNumber}", callerIdNumberText);
    return this.getElementByXpath(xpath);
  }

}
