package xtime.com.actions;

import xtime.com.screens.EstimateScreen;

public class EstimateActions extends  AbstractActions {

  public EstimateScreen estimateScreen;

  /**
   * Constructor
   * */
  public EstimateActions() {
    this.estimateScreen = new EstimateScreen();
  }

  // ******* ******* ******* Head ******* ******* *******
  /** Verify estimate tittle text. */
  public void verifyEstimateTittleText() {
    this.waitForDisplayed(this.estimateScreen.estimateTittleText);
  }

  // ******* ******* ******* Body Screen Step1 ******* ******* *******
  /** Verify review services and estimate text. */
  public void verifyReviewServicesAndEstimateText() {
    this.waitForDisplayed(this.estimateScreen.reviewServicesAndEstimateText);
  }

  /** Verify service selected spyder oil change text. */
  public void verifyServiceSelectedSpyderOilChangeText() {
    this.waitForDisplayed(this.estimateScreen.serviceSelectedSpyderOilChangeText);
  }

  /** Verify approve estimate button. */
  public void verifyApproveEstimateButton() {
    this.waitForDisplayed(this.estimateScreen.approveEstimateButton);
  }

  /** Click approve estimate button. */
  public void clickApproveEstimateButton() {
    this.estimateScreen.approveEstimateButton.click();
  }

  // ******* ******* ******* Body Screen Step2 ******* ******* *******
  /** Verify review customer information text. */
  public void verifyReviewCustomerInformationText() {
    this.waitForDisplayed(this.estimateScreen.reviewCustomerInformationText);
  }

  /** Verify owner contact info text. */
  public void verifyOwnerContactInfoText() {
    this.waitForDisplayed(this.estimateScreen.ownerContactInfoText);
  }

  /** Verify customer email label. */
  public void verifyCustomerEmailLabel() {
    this.waitForDisplayed(this.estimateScreen.customerEmailLabel);
  }

  /** Verify customer email input. */
  public void verifyCustomerEmailInput() {
    this.waitForDisplayed(this.estimateScreen.customerEmailInput);
  }

  /** Verify customer email input value text. */
  public void verifyCustomerEmailInputValueText() {
    this.verifyElementText(this.estimateScreen.customerEmailInput, this.estimateScreen.customerEmail);
  }

  /** Verify customer home phone label. */
  public void verifyCustomerHomePhoneLabel() {
    this.waitForDisplayed(this.estimateScreen.customerHomePhoneLabel);
  }

  /** Verify customer home phone input. */
  public void verifyCustomerHomePhoneInput() {
    this.waitForDisplayed(this.estimateScreen.customerHomePhoneInput);
  }

  /** Verify customer home phone input value text. */
  public void verifyCustomerHomePhoneInputValueText() {
    this.verifyElementText(this.estimateScreen.customerHomePhoneInput, this.estimateScreen.customerPhone);
  }

  /** Verify owner address text. */
  public void verifyOwnerAddressText() {
    this.waitForDisplayed(this.estimateScreen.ownerAddressText);
  }

  /** Verify customer first name label. */
  public void verifyCustomerFirstNameLabel() {
    this.waitForDisplayed(this.estimateScreen.customerFirstNameLabel);
  }

  /** Verify customer first name input. */
  public void verifyCustomerFirstNameInput() {
    this.waitForDisplayed(this.estimateScreen.customerFirstNameInput);
  }

  /** Verify customer first name input value text. */
  public void verifyCustomerFirstNameInputValueText() {
    String customerFirstName = this.estimateScreen.customer.split(" ")[0];
    this.verifyElementText(this.estimateScreen.customerFirstNameInput, customerFirstName);
  }

  /** Verify customer last name / company label. */
  public void verifyCustomerLastNameLabel() {
    this.waitForDisplayed(this.estimateScreen.customerLastNameLabel);
  }

  /** Verify customer last name input. */
  public void verifyCustomerLastNameInput() {
    this.waitForDisplayed(this.estimateScreen.customerLastNameInput);
  }

  /** Verify customer last name input value text. */
  public void verifyCustomerLastNameInputValueText() {
    String customerLastName = this.estimateScreen.customer.split(" ")[1];
    this.verifyElementText(this.estimateScreen.customerLastNameInput, customerLastName);
  }

  /** Verify back button. */
  public void verifyBackButton() {
    this.waitForDisplayed(this.estimateScreen.backButton);
  }

  /** Verify looks good button. */
  public void verifyLooksGoodButton() {
    this.waitForDisplayed(this.estimateScreen.looksGoodButton);
  }

  /** Click looks good button. */
  public void clickLooksGoodButton() {
    this.estimateScreen.looksGoodButton.click();
  }

  // ******* ******* ******* Body Screen Step3 ******* ******* *******
  /** Verify double check and sign text. */
  public void verifyDoubleCheckAndSignText() {
    this.waitForDisplayed(this.estimateScreen.doubleCheckAndSignText);
  }

  /** Verify contact information text. */
  public void verifyContactInformationText() {
    this.waitForDisplayed(this.estimateScreen.contactInformationText);
  }

  /** Verify customer email value text. */
  public void verifyCustomerEmailValueText() {
    this.verifyElementText(this.estimateScreen.customerEmailText, this.estimateScreen.customerEmail);
  }

  /** Verify personal information text. */
  public void verifyPersonalInformationText() {
    this.waitForDisplayed(this.estimateScreen.personalInformationText);
  }

  /** Verify customer full name value text. */
  public void verifyCustomerFullNameValueText() {
    this.verifyElementText(this.estimateScreen.customerFullNameText, this.estimateScreen.customer);
  }

}
