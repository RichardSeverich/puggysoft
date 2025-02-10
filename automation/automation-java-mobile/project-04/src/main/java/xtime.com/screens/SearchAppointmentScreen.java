package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class SearchAppointmentScreen extends Screen {


  /**
   * Constructor.
   */
  public SearchAppointmentScreen() {
    super();
  }

  //Head
  //android.widget.TextView[@text="Search"]
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Search\"]")
  public MobileElement searchTitleText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Add Customer\"]")
  public MobileElement addCustomerButton;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"Search Appointments / Add Walk-in Appointments\"]")
  public MobileElement searchAppointmentsInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Search Additional Days & Customer Information\"]")
  public MobileElement searchAdditionalDayAndCustomerInfoButton;

  // ******* ******* ******* ADD CUSTOMER VEHICLE SCREEN ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Add Customer/Vehicle\"]")
  public MobileElement addCustomerVehicleTittleText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Search\"]")
  public MobileElement btnSearchBackButton;

  // Body
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Customer Information\"]")
  public MobileElement customerInformationText;

}

