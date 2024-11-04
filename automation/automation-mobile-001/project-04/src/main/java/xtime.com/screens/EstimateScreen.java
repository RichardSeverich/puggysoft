package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class EstimateScreen extends Screen {


  /**
   * Constructor.
   */
  public EstimateScreen() {
    super();
  }

  // ******* ******* ******* Head ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Estimate\"]")
  public MobileElement estimateTittleText;

  // ******* ******* ******* Body Screen Step1 ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"review-estimate-text\"]")
  public MobileElement reviewServicesAndEstimateText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"918 Spyder Oil Change\"]")
  public MobileElement serviceSelectedSpyderOilChangeText;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"approve-estimate\"]")
  public MobileElement approveEstimateButton;

  // ******* ******* ******* Body Screen Step2 ******* ******* *******
  // owner contact information
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Review Customer Information\"]")
  public MobileElement reviewCustomerInformationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Owner Contact Info\"]")
  public MobileElement ownerContactInfoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Email\"]")
  public MobileElement customerEmailLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"reviewCustomerEmailField\"]")
  public MobileElement customerEmailInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Home Phone\"]")
  public MobileElement customerHomePhoneLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"reviewCustomerHomePhoneField\"]")
  public MobileElement customerHomePhoneInput;

  // Owner address
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Owner Address\"]")
  public MobileElement ownerAddressText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"First Name\"]")
  public MobileElement customerFirstNameLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"reviewCustomerFirstNameField\"]")
  public MobileElement customerFirstNameInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Last Name / Company\"]")
  public MobileElement customerLastNameLabel;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"reviewCustomerLastNameField\"]")
  public MobileElement customerLastNameInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Looks Good\"]")
  public MobileElement looksGoodButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Back\"]")
  public MobileElement backButton;

  // ******* ******* ******* Body Screen Step3 ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Double Check and Sign\"]")
  public MobileElement doubleCheckAndSignText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"contact-information\"]")
  public MobileElement contactInformationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"contact-email\"]")
  public MobileElement customerEmailText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"personal-information\"]")
  public MobileElement personalInformationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"customer-full-name\"]")
  public MobileElement customerFullNameText;

}

