package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import netphone.com.core.Screen;
import netphone.com.models.EnumPlatformName;

/**
 * Settings Screen.
 */
public class SettingsScreen extends Screen {

  /** Constructor. */
  public SettingsScreen() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeNavigationBar[@name=\"Settings\"]/XCUIElementTypeOther")
  public MobileElement exitSettingsButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"SETTINGS\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"SETTINGS\"]")
  public MobileElement settingsText;

  String profileImageTextAndroid = "//android.widget.TextView[@text=\"${userInitials}\"]";
  String profileImageTextIos = "(//XCUIElementTypeOther[@name=\"${userInitials}\"])";

  String profileNameTextAndroid = "//android.widget.TextView[@text=\"${userName}\"]";
  String profileNameTextIos = "//XCUIElementTypeStaticText[@name=\"${userName}\"]";

  String profileMailTextAndroid = "//android.widget.TextView[@text=\"${userMail}\"]";
  String profileMailTextIos = "//XCUIElementTypeStaticText[@name=\"${userMail}\"]";

  String profileExtTextAndroid = "//android.widget.TextView[@text=\"Ext: ${userExt}\"]";
  String profileExtTextIos = "//XCUIElementTypeStaticText[@name=\"Ext: ${userExt}\"]";

  //GENERAL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"General\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"General\"]")
  public MobileElement generalText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Time Zone\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name, \"Time Zone\")]")
  public MobileElement timeZoneText;

  String profileZoneTextAndroid = "//android.widget.TextView[@text=\"${userZone}\"]";
  String profileZoneTextIos = "//XCUIElementTypeOther[@name=\"Time Zone ${userZone}\"]";

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Call Forwarding\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name, \"Call Forwarding\")]")
  public MobileElement callForwardingText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Off\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name, \"Off\")]")
  public MobileElement callForwardingOffText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Caller ID\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name, \"Caller ID\")]")
  public MobileElement callerIdText;

  String callerIdNumberTextAndroid = "//android.widget.TextView[@text=\"${callerIdNumber}\"]";
  String callerIdNumberTextIos = "//XCUIElementTypeOther[contains(@name, \"${callerIdNumber}\")]";

  //DEVICE SETTINGS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Device Settings\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Device Settings\"]")
  public MobileElement deviceSettingsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Silent Mode\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Silent Mode\"]")
  public MobileElement silentModeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Disables all notifications and incoming calls to this device.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Disables all notifications and incoming calls to this device.\"]")
  public MobileElement silentModeUnderText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Minutes Mode\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Minutes Mode\"]")
  public MobileElement minutesModeText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Calls will use your mobile plan minutes instead of data.\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Calls will use your mobile plan minutes instead of data.\"]")
  public MobileElement minutesModeUnderText;

  //LEGAL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Legal\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Legal\"]")
  public MobileElement legalText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Privacy Policy\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Privacy Policy\"]")
  public MobileElement privacyPolicyText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Terms of Service\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Terms of Service\"]")
  public MobileElement termsOfServiceText;

  //APPLICATION
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Application\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Application\"]")
  public MobileElement applicationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Integrations\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Integrations\"]")
  public MobileElement integrationsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Advanced log reporting\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Advanced log reporting\"]")
  public MobileElement advancedLogReporting;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Log out\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Log out\"]")
  public MobileElement logOutButton;

  public MobileElement getImageProfileText(String userInitials) {
    String xpath = this.profileImageTextAndroid.replace("${userInitials}", userInitials);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.profileImageTextIos.replace("${userInitials}", userInitials);
    }
    return this.getElementByXpath(xpath);
  }

  public MobileElement getNameText(String userName) {
    String xpath = this.profileNameTextAndroid.replace("${userName}", userName);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.profileNameTextIos.replace("${userName}", userName);
    }
    return this.getElementByXpath(xpath);
  }

  public MobileElement getMailText(String userMail) {
    String xpath = this.profileMailTextAndroid.replace("${userMail}", userMail);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.profileMailTextIos.replace("${userMail}", userMail);
    }
    return this.getElementByXpath(xpath);
  }

  public MobileElement getExtText(String userExt) {
    String xpath = this.profileExtTextAndroid.replace("${userExt}", userExt);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.profileExtTextIos.replace("${userExt}", userExt);
    }
    return this.getElementByXpath(xpath);
  }

  public MobileElement getZoneText(String userZone) {
    String xpath = this.profileZoneTextAndroid.replace("${userZone}", userZone);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.profileZoneTextIos.replace("${userZone}", userZone);
    }
    return this.getElementByXpath(xpath);
  }

  public MobileElement getCallerIdNumberText(String callerIdNumberText) {
    String xpath = this.callerIdNumberTextAndroid.replace("${callerIdNumber}", callerIdNumberText);
    if (this.platformName == EnumPlatformName.IOS) {
      xpath = this.callerIdNumberTextIos.replace("${callerIdNumber}", callerIdNumberText);
    }
    return this.getElementByXpath(xpath);
  }

}
