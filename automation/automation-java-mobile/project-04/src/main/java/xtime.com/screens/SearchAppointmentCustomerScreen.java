package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class SearchAppointmentCustomerScreen extends Screen {


  /**
   * Constructor.
   */
  public SearchAppointmentCustomerScreen() {
    super();
  }

  //Head
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Didn't find what you were looking for?\"]")
  public MobileElement didntFindText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Search OEM Customer Database\"]")
  public MobileElement searchOemCustomerDatabaseButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Customer\"]")
  public MobileElement customerText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Edit\"]")
  public MobileElement editCustomerButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Add Vehicle\"]")
  public MobileElement addVehicleToCustomerButton;

  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Check-In\"])[1]")
  public MobileElement checkInVehicleButton;

}

