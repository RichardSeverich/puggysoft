package xtime.com.actions;

import xtime.com.screens.CheckInScreen;

public class CheckInActions extends  AbstractActions {

  public CheckInScreen checkInScreen;

  /**
   * Constructor
   * */
  public CheckInActions() {
    this.checkInScreen = new CheckInScreen();
  }

  // ******* ******* ******* HEAD ******* ******* *******
  /** Verify check in tittle text. */
  public void verifyCheckInTittleText() {
    this.waitForDisplayed(this.checkInScreen.checkInTittleText);
  }

  /** Verify customer name and vehicle name text. */
  public void verifyCustomerNameVehicleNameText() {
    String customerNameVehicleName = this.checkInScreen.customer.concat(" - ").concat(this.checkInScreen.vehicle);
    this.verifyMobileElementTextViewIsVisible(customerNameVehicleName);
  }

  /** Verify workbook arrow back button. */
  public void verifyWorkbookArrowBackButton() {
    this.waitForDisplayed(this.checkInScreen.workbookArrowBackButton);
  }

  /** Click workbook arrow back button. */
  public void clickWorkbookArrowBackButton() {
    this.checkInScreen.workbookArrowBackButton.click();
  }

  /** Verify btn right menu button. */
  public void verifyBtnRightMenuButton() {
    this.waitForDisplayed(this.checkInScreen.btnRightMenuButton);
  }

  /** Click btn right menu button. */
  public void clickBtnRightMenuButton() {
    this.checkInScreen.btnRightMenuButton.click();
  }

  // ******* ******* ******* BODY ******* ******* *******
  /** Verify appointment and vehicle text. */
  public void verifyAppointmentAndVehicleText() {
    this.waitForDisplayed(this.checkInScreen.appointmentAndVehicleText);
  }

  /** Verify current Mileage Label. */
  public void verifyCurrentMileageLabel() {
    this.waitForDisplayed(this.checkInScreen.currentMileageLabel);
  }

  /** Verify current mileage input. */
  public void verifyCurrentMileageInput() {
    this.waitForDisplayed(this.checkInScreen.currentMileageInput);
  }

  /** Set current mileage input. */
  public void setCurrentMileageInput(String mileage) {
    this.checkInScreen.currentMileageInput.click();
    this.checkInScreen.currentMileageInput.sendKeys(mileage);
  }

  /** Verify edit vehicle information button. */
  public void verifyEditVehicleInfoButton() {
    this.waitForDisplayed(this.checkInScreen.editVehicleInfoButton);
  }

  // ******* ******* ******* RIGHT MENU ******* ******* *******
  /** Verify right menu check in button. */
  public void verifyRightMenuCheckInButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuCheckInButton);
  }

  /** Click right menu check in button. */
  public void clickRightMenuCheckInButton() {
    this.checkInScreen.rightMenuCheckInButton.click();
  }

  public void verifyRightMenuCheckInButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuCheckInButton);
  }

  /** Verify right menu walk around button. */
  public void verifyRightMenuWalkAroundButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuWalkAroundButton);
  }

  /** Click right menu walk around button. */
  public void clickRightMenuWalkAroundButton() {
    this.checkInScreen.rightMenuWalkAroundButton.click();
  }

  /** Verify right menu walk around button is enabled. */
  public void verifyRightMenuWalkAroundButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuWalkAroundButton);
  }

  /** Verify right menu walk around button is disabled. */
  public void verifyRightMenuWalkAroundButtonIsDisabled() {
    this.verifyElementIsNotEnable(this.checkInScreen.rightMenuWalkAroundButton);
  }

  /** Verify right menu symptom survey button. */
  public void verifyRightMenuSymptomSurveyButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuSymptomSurveyButton);
  }

  /** Click right menu symptom survey button. */
  public void clickRightMenuSymptomSurveyButton() {
    this.checkInScreen.rightMenuSymptomSurveyButton.click();
  }

  /** Verify right menu symptom survey button is enabled. */
  public void verifyRightMenuSymptomSurveyButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuSymptomSurveyButton);
  }

  /** Verify right menu symptom survey button is disabled. */
  public void verifyRightMenuSymptomSurveyButtonIsDisabled() {
    this.verifyElementIsNotEnable(this.checkInScreen.rightMenuSymptomSurveyButton);
  }

  /** Verify right menu services button. */
  public void verifyRightMenuServicesButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuServicesButton);
  }

  /** Click right menu services button. */
  public void clickRightMenuServicesButton() {
    this.checkInScreen.rightMenuServicesButton.click();
  }

  /** Verify right menu services button is enabled. */
  public void verifyRightMenuServicesButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuServicesButton);
  }

  /** Verify right menu services button is disabled. */
  public void verifyRightMenuServicesButtonIsDisabled() {
    this.verifyElementIsNotEnable(this.checkInScreen.rightMenuServicesButton);
  }

  /** Verify right menu estimate button. */
  public void verifyRightMenuEstimateButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuEstimateButton);
  }

  /** Click right menu estimate button. */
  public void clickRightMenuEstimateButton() {
    this.checkInScreen.rightMenuEstimateButton.click();
  }

  /** Verify right menu estimate button is enabled. */
  public void verifyRightMenuEstimateButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuEstimateButton);
  }

  /** Verify right menu estimate button is disabled. */
  public void verifyRightMenuEstimateButtonIsDisabled() {
    this.verifyElementIsNotEnable(this.checkInScreen.rightMenuEstimateButton);
  }

  /** Verify right menu documents and payment button. */
  public void verifyRightMenuDocumentsAndPaymentButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuDocumentsAndPaymentButton);
  }

  /** Click right menu documents and payment button. */
  public void clickRightMenuDocumentsAndPaymentButton() {
    this.checkInScreen.rightMenuDocumentsAndPaymentButton.click();
  }

  /** Verify right menu documents and payment button is enabled. */
  public void verifyRightMenuDocumentsAndPaymentButtonIsEnabled() {
    this.verifyElementIsEnable(this.checkInScreen.rightMenuDocumentsAndPaymentButton);
  }

  /** Verify right menu documents and payment button is disabled. */
  public void verifyRightMenuDocumentsAndPaymentButtonIsDisabled() {
    this.verifyElementIsNotEnable(this.checkInScreen.rightMenuDocumentsAndPaymentButton);
  }

  /** Verify right menu customer information button. */
  public void verifyRightMenuCustomerInfoButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuCustomerInfoButton);
  }

  /** Click right menu customer information button. */
  public void clickRightMenuCustomerInfoButton() {
    this.checkInScreen.rightMenuCustomerInfoButton.click();
  }

  /** Verify right menu vehicle information button. */
  public void verifyRightMenuVehicleInfoButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuVehicleInfoButton);
  }

  /** Click right menu vehicle information button. */
  public void clickRightMenuVehicleInfoButton() {
    this.checkInScreen.rightMenuVehicleInfoButton.click();
  }

  /** Verify right menu alert and notes button. */
  public void verifyRightMenuAlertAndNotesButton() {
    this.waitForDisplayed(this.checkInScreen.rightMenuAlertAndNotesButton);
  }

  /** Click right menu alert and notes button. */
  public void clickRightMenuAlertAndNotesButton() {
    this.checkInScreen.rightMenuAlertAndNotesButton.click();
  }

}
