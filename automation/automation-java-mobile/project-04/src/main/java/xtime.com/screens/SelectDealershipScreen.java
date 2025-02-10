package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class SelectDealershipScreen extends Screen {


  /**
   * Constructor.
   */
  public SelectDealershipScreen() {
    super();
  }

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Select a Dealership\"]")
  public MobileElement selectDealershipText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"Search dealership name or location\"]")
  public MobileElement selectDealershipInput;

}

