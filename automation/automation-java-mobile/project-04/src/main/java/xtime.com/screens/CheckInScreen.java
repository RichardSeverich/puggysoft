package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

public class CheckInScreen extends Screen {

  public CheckInScreen() {
    super();
  }

  // ******* ******* ******* HEAD ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Check In\"]")
  public MobileElement checkInTittleText;

  //@AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"ios-arrow-round-back\"]")
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Workbook\"]")
  public MobileElement workbookArrowBackButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"ios-menu\"]")
  public MobileElement btnRightMenuButton;

  // ******* ******* ******* BODY ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"appointmentAndVehicle\"]")
  public MobileElement appointmentAndVehicleText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"currentMileageLabel\"]")
  public MobileElement currentMileageLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"currentMileageInputField\"]")
  public MobileElement currentMileageInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Edit Vehicle Information\"]")
  public MobileElement editVehicleInfoButton;

  // ******* ******* ******* RIGHT MENU ******* ******* *******
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/appointments\"]")
  public MobileElement rightMenuCheckInButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/walkAround\"]")
  public MobileElement rightMenuWalkAroundButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/symptomSurvey\"]")
  public MobileElement rightMenuSymptomSurveyButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/service\"]")
  public MobileElement rightMenuServicesButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/estimate\"]")
  public MobileElement rightMenuEstimateButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/documentsAndPayment\"]")
  public MobileElement rightMenuDocumentsAndPaymentButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/customerInformationundefined\"]")
  public MobileElement rightMenuCustomerInfoButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/vehicleInformationundefined\"]")
  public MobileElement rightMenuVehicleInfoButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"rightMenu-visit/alertAndNotes\"]")
  public MobileElement rightMenuAlertAndNotesButton;

}
