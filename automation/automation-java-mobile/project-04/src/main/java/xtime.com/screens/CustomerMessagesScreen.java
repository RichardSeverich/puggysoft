package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class CustomerMessagesScreen extends Screen {


  /**
   * Constructor.
   */
  public CustomerMessagesScreen() {
    super();
  }

  //Head
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Customer Messages\"]")
  public MobileElement customerMessagesTitleText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"searchBar-textInput\"]")
  public MobileElement searchMessagesInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Search customer\"]")
  public MobileElement searchCustomerButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Scan VIN\"]")
  public MobileElement scanVinButton;

}

