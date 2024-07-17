package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class ServicesScreen extends Screen {


  /**
   * Constructor.
   */
  public ServicesScreen() {
    super();
  }

  // ******* ******* ******* Head ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"services-title\"]")
  public MobileElement servicesTittleText;

  // ******* ******* ******* Body ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"package-tab\"]")
  public MobileElement packageTab;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"services-tab\"]")
  public MobileElement servicesTab;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"tires-tab\"]")
  public MobileElement tiresTab;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"promotions-tab\"]")
  public MobileElement promotionsTab;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"review-estimate\"]")
  public MobileElement reviewEstimateButton;

  // ******* ******* ******* Services tab ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"serviceName\" and @text=\"918 Spyder Oil Change\"]")
  public MobileElement servicesTabSpyderOilChangeText;

  @AndroidFindBy(xpath = "(//android.view.ViewGroup[@content-desc=\"serviceCheckBoxView\"])[1]/android.view.ViewGroup/android.view.ViewGroup")
  public MobileElement servicesTabSpyderOilChangeCheckbox;

}

