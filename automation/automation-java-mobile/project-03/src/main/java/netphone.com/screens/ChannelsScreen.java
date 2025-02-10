package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Channels Screen.
 */
public class ChannelsScreen extends Screen {

  /** Constructor. */
  public ChannelsScreen() {
    super();
  }

  //CHANNELS SCREEN
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Channels\"]")
  public MobileElement channelsText;

  //GENERAL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"general\"]")
  public MobileElement generalText;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement channelsArrowButton;

  //NEW CHANNEL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"New Channel\"]")
  public MobileElement newChannelText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Name\"]")
  public MobileElement nameText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"new-channel\"]")
  public MobileElement newChannelNameText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Private channel\"]")
  public MobileElement privateChannelText;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement privateChannelSwitch;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Only selected members and roles will be able to view this channel.\"]")
  public MobileElement privateChannelUnderText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"CREATE\"]")
  public MobileElement createButton;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement exitButton;

  //BROWSE
  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.View/android.view.View[1]/android.view.ViewGroup")
  public MobileElement browseText;
}
