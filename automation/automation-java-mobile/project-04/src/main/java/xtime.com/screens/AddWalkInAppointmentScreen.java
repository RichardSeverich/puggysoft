package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class AddWalkInAppointmentScreen extends Screen {


  /**
   * Constructor.
   */
  public AddWalkInAppointmentScreen() {
    super();
  }

  //Head
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Add Walk-In Appointment\"]")
  public MobileElement addWalkInAppointmentTittleText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"Search customer/vehicle to begin...\"]")
  public MobileElement searchCustomerVehicleInput;

}

