package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class LeftMenuScreen extends Screen {


  /**
   * Constructor.
   */
  public LeftMenuScreen() {
    super();
  }

  // ******* ******* ******* LEFT MENU SCREEN ******* ******* *******
  //android.view.TextView[@contains(@text, "Workbook")]
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"homeSideBar-home/workbook\"]")
  public MobileElement workBookLeftMenuButton;

  //android.view.TextView[@contains(@text, "Search")]
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"homeSideBar-home/searchAppointment\"]")
  public MobileElement searchAppointmentLeftMenuButton;

  //android.view.TextView[@contains(@text, "Customer Messages")]
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"homeSideBar-home/customerMessages\"]")
  public MobileElement customerMessagesLeftMenuButton;

  //android.view.TextView[@contains(@text, "Release Notes")]
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"homeSideBar-home/releaseNotes\"]")
  public MobileElement releaseNotesLeftMenuButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Switch Dealership\"]")
  public MobileElement switchDealershipLeftMenuButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"Sign Out\"]")
  public MobileElement signOutButton;

  // ******* ******* ******* SIGN OUT ALERT SCREEN ******* ******* *******
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Sign Out\"])[1]")
  public MobileElement signOutAlertText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Are you sure you want to sign out of Engage?\"]")
  public MobileElement areYouSureAlertText;

  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Sign Out\"])[2]")
  public MobileElement signOutAlertButton;

  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Cancel\"]")
  public MobileElement cancelAlertButton;
}

