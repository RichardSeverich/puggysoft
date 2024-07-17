package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.CheckInActions;


/**
 * Steps.
 */
public class CheckInSteps {

  private final CheckInActions checkInActions;

  /**
   * Constructor.
   */
  public CheckInSteps() {
    this.checkInActions = new CheckInActions();
  }

  // ******* ******* ******* HEAD ******* ******* *******
  @Given("^I verify 'Check in title' text")
  public void thenVerifyCheckInTittleText() {
    this.checkInActions.verifyCheckInTittleText();
  }

  @Then("^I verify 'Customer name and vehicle name' text")
  public void thenVerifyCustomerNameVehicleNameText() {
    this.checkInActions.verifyCustomerNameVehicleNameText();
  }

  @Then("^I verify 'Workbook arrow back' button")
  public void thenVerifyWorkbookArrowBackButton() {
    this.checkInActions.verifyWorkbookArrowBackButton();
  }

  @Then("^I click 'Workbook arrow back' button")
  public void thenClickWorkbookArrowBackButton() {
    this.checkInActions.clickWorkbookArrowBackButton();
  }

  @Then("^I verify 'Btn right menu' button")
  public void thenVerifyBtnRightMenuButton() {
    this.checkInActions.verifyBtnRightMenuButton();
  }

  @Then("^I click 'Btn right menu' button")
  public void thenClickBtnRightMenuButton() {
    this.checkInActions.clickBtnRightMenuButton();
  }

  // ******* ******* ******* BODY ******* ******* *******
  @Then("^I verify 'Appointment and vehicle' text")
  public void thenVerifyAppointmentAndVehicleText() {
    this.checkInActions.verifyAppointmentAndVehicleText();
  }

  @Then("^I verify 'Current mileage' label")
  public void thenVerifyCurrentMileageLabel() {
    this.checkInActions.verifyCurrentMileageLabel();
  }

  @Then("^I verify 'Current mileage' input")
  public void thenVerifyCurrentMileageInput() {
    this.checkInActions.verifyCurrentMileageInput();
  }

  @Then("^I set \"([^\"]*)\" 'Current mileage' input")
  public void thenSetCurrentMileageInput(String mileage) {
    this.checkInActions.setCurrentMileageInput(mileage);
  }

  @Then("^I verify 'Edit vehicle information' button")
  public void thenVerifyEditVehicleInfoButton() {
    this.checkInActions.verifyEditVehicleInfoButton();
  }

  // ******* ******* ******* RIGHT MENU ******* ******* *******
  @Then("^I verify 'Check in' button")
  public void thenVerifyRightMenuCheckInButton() {
    this.checkInActions.verifyRightMenuCheckInButton();
  }

  @Then("^I click 'Check in' button")
  public void thenClickRightMenuCheckInButton() {
    this.checkInActions.clickRightMenuCheckInButton();
  }

  @Then("^I verify 'Check in' is enabled button")
  public void thenVerifyRightMenuCheckInButtonIsEnabled() {
    this.checkInActions.verifyRightMenuCheckInButtonIsEnabled();
  }

  @Then("^I verify 'Walk around' button")
  public void thenVerifyRightMenuWalkAroundButton() {
    this.checkInActions.verifyRightMenuWalkAroundButton();
  }

  @Then("^I click 'Walk around' button")
  public void thenClickRightMenuWalkAroundButton() {
    this.checkInActions.clickRightMenuWalkAroundButton();
  }

  @Then("^I verify 'Walk around' is enabled button")
  public void thenVerifyRightMenuWalkAroundButtonIsEnabled() {
    this.checkInActions.verifyRightMenuWalkAroundButtonIsEnabled();
  }

  @Then("^I verify 'Walk around' is disabled button")
  public void thenVerifyRightMenuWalkAroundButtonIsDisabled() {
    this.checkInActions.verifyRightMenuWalkAroundButtonIsDisabled();
  }

  @Then("^I verify 'Symptom survey' button")
  public void thenVerifyRightMenuSymptomSurveyButton() {
    this.checkInActions.verifyRightMenuSymptomSurveyButton();
  }

  @Then("^I click 'Symptom survey' button")
  public void thenClickRightMenuSymptomSurveyButton() {
    this.checkInActions.clickRightMenuSymptomSurveyButton();
  }

  @Then("^I verify 'Symptom survey' is enabled button")
  public void thenVerifyRightMenuSymptomSurveyButtonIsEnabled() {
    this.checkInActions.verifyRightMenuSymptomSurveyButtonIsEnabled();
  }

  @Then("^I verify 'Symptom survey' is disabled button")
  public void thenVerifyRightMenuSymptomSurveyButtonIsDisabled() {
    this.checkInActions.verifyRightMenuSymptomSurveyButtonIsDisabled();
  }

  @Then("^I verify 'Services' button")
  public void thenVerifyRightMenuServicesButton() {
    this.checkInActions.verifyRightMenuServicesButton();
  }

  @Then("^I click 'Services' button")
  public void thenClickRightMenuServicesButton() {
    this.checkInActions.clickRightMenuServicesButton();
  }

  @Then("^I verify 'Services' is enabled button")
  public void thenVerifyRightMenuServicesButtonIsEnabled() {
    this.checkInActions.verifyRightMenuServicesButtonIsEnabled();
  }

  @Then("^I verify 'Services' is disabled button")
  public void thenVerifyRightMenuServicesButtonIsDisabled() {
    this.checkInActions.verifyRightMenuServicesButtonIsDisabled();
  }

  @Then("^I verify 'Estimate' button")
  public void thenVerifyRightMenuEstimateButton() {
    this.checkInActions.verifyRightMenuEstimateButton();
  }

  @Then("^I click 'Estimate' button")
  public void thenClickRightMenuEstimateButton() {
    this.checkInActions.clickRightMenuEstimateButton();
  }

  @Then("^I verify 'Estimate' is enabled button")
  public void thenVerifyRightMenuEstimateButtonIsEnabled() {
    this.checkInActions.verifyRightMenuEstimateButtonIsEnabled();
  }

  @Then("^I verify 'Estimate' is disabled button")
  public void thenVerifyRightMenuEstimateButtonIsDisabled() {
    this.checkInActions.verifyRightMenuEstimateButtonIsDisabled();
  }

  @Then("^I verify 'Documents and payment' button")
  public void thenVerifyRightMenuDocumentsAndPaymentButton() {
    this.checkInActions.verifyRightMenuDocumentsAndPaymentButton();
  }

  @Then("^I click 'Documents and payment' button")
  public void thenClickRightMenuDocumentsAndPaymentButton() {
    this.checkInActions.clickRightMenuDocumentsAndPaymentButton();
  }

  @Then("^I verify 'Documents and payment' is enabled button")
  public void thenVerifyRightMenuDocumentsAndPaymentButtonIsEnabled() {
    this.checkInActions.verifyRightMenuDocumentsAndPaymentButtonIsEnabled();
  }

  @Then("^I verify 'Documents and payment' is disabled button")
  public void thenVerifyRightMenuDocumentsAndPaymentButtonIsDisabled() {
    this.checkInActions.verifyRightMenuDocumentsAndPaymentButtonIsDisabled();
  }

  @Then("^I verify 'Customer information' button")
  public void thenVerifyRightMenuCustomerInfoButton() {
    this.checkInActions.verifyRightMenuCustomerInfoButton();
  }

  @Then("^I click 'Customer information' button")
  public void thenClickRightMenuCustomerInfoButton() {
    this.checkInActions.clickRightMenuCustomerInfoButton();
  }

  @Then("^I verify 'Vehicle information' button")
  public void thenVerifyRightMenuVehicleInfoButton() {
    this.checkInActions.verifyRightMenuVehicleInfoButton();
  }

  @Then("^I click 'Vehicle information' button")
  public void thenClickRightMenuVehicleInfoButton() {
    this.checkInActions.clickRightMenuVehicleInfoButton();
  }

  @Then("^I verify 'Alert and notes' button")
  public void thenVerifyRightMenuAlertAndNotesButton() {
    this.checkInActions.verifyRightMenuAlertAndNotesButton();
  }

  @Then("^I click 'Alert and notes' button")
  public void thenClickRightMenuAlertAndNotesButton() {
    this.checkInActions.clickRightMenuAlertAndNotesButton();
  }

}
