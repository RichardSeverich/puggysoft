package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Channels General Screen.
 */
public class ChannelsGeneralScreen extends Screen {

  /** Constructor. */
  public ChannelsGeneralScreen() {
    super();
  }

  //GENERAL SCREEN
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"Contacts names\"]")
  public MobileElement channelsScreenText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"Amount of members in the chat\"]")
  public MobileElement channelsScreenUnderText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"write your message here\"]")
  public MobileElement messagePlaceholderText;

  @AndroidFindBy(xpath = "//android.widget.Button[@content-desc=\"Go back, Navigates to the previous screen\"]/android.view.ViewGroup")
  public MobileElement channelsScreenArrowBack;

  //GENERAL SCREEN ICON SCREEN
  @AndroidFindBy(xpath = "//android.widget.Button[@content-desc=\"Chat Information, Navigates to the chat information\"]/android.view.ViewGroup")
  public MobileElement generalIconButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"general\"]")
  public MobileElement generalTextUnderIcon;

  //GENERAL SCREEN ICON SCREEN ABOUT
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"About\"]")
  public MobileElement aboutText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Name\"]")
  public MobileElement nameText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"general\"]")
  public MobileElement nameGeneralText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Description\"]")
  public MobileElement descriptionText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"Let everyone know how to use this channel!\"]")
  public MobileElement descriptionHowToUseChannelText;

  //GENERAL SCREEN ICON SCREEN MEMBERS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Members 1\"]")
  public MobileElement membersText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"ChannelInfoTabMembers\"]")
  public MobileElement channelInfoTabMembersText;

  //GENERAL SCREEN ICON SCREEN SETTINGS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Settings\"]")
  public MobileElement settingsText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"ChannelInfoTabSettings\"]")
  public MobileElement channelInfoTabSettings;

  //GENERAL SCREEN ICON SCREEN SAVE
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Save\"]")
  public MobileElement saveText;

  //GENERAL SCREEN ICON SCREEN CANCEL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Cancel\"]")
  public MobileElement cancelText;

  //GENERAL SCREEN ICON SCREEN EXIT
  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement generalScreenIconScreenExitButton;

}
