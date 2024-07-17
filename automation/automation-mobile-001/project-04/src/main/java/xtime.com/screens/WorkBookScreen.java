package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class WorkBookScreen extends Screen {


  /**
   * Constructor.
   */
  public WorkBookScreen() {
    super();
  }

  // ******* ******* ******* HEAD ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Workbook\"]")
  public MobileElement workBookTitleText;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"btnMainMenu\"]")
  public MobileElement btnMainMenuButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"btnBarcodeWalkInAppt\"]")
  public MobileElement btnBarcodeWalkInAppt;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"btnAddWalkInAppt\"]")
  public MobileElement btnAddWalkInAppt;

  // ******* ******* ******* LEFT MENU ******* ******* *******
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"leftMenu-home/workbook\"]")
  public MobileElement leftMenuWorkbookButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"leftMenu-home/searchAppointment\"]")
  public MobileElement leftMenuSearchAppointmentButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"leftMenu-home/customerMessages\"]")
  public MobileElement leftMenuCustomerMessagesButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"leftMenu-home/releaseNotes\"]")
  public MobileElement leftMenuReleaseNotesButton;

  // ******* ******* ******* BODY ******* ******* *******
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"previousDateButton\"]")
  public MobileElement previousDateArrowButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"forwardDateButton\"]")
  public MobileElement forwardDateArrowButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"advisorFilterDropDown\"]")
  public MobileElement advisorFilterDropDown;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"All Advisors\"]")
  public MobileElement allAdvisorsTextInDropDown;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Status\"]")
  public MobileElement statusDropDown;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Apply\"]")
  public MobileElement statusDropDownApplyButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Cancel\"]")
  public MobileElement statusDropDownCancelButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Needs Action\"]")
  public MobileElement needsActionButton;

}

