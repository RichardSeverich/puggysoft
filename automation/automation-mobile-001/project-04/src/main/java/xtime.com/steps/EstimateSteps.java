package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.EstimateActions;


/**
 * Steps.
 */
public class EstimateSteps {

  private final EstimateActions estimateActions;

  /**
   * Constructor.
   */
  public EstimateSteps() {
    this.estimateActions = new EstimateActions();
  }

  // ******* ******* ******* Head ******* ******* *******
  @Given("^I verify 'Estimate' title text")
  public void givenVerifySymptomSurveyTittleText() {
    this.estimateActions.verifyEstimateTittleText();
  }

  // ******* ******* ******* Body Screen Step1******* ******* *******
  @Then("^I verify 'Review services and estimate' text")
  public void thenVerifyReviewServicesAndEstimateText() {
    this.estimateActions.verifyReviewServicesAndEstimateText();
  }

  @Then("^I verify service selected 'Spyder oil change' text")
  public void thenVerifyServiceSelectedSpyderOilChangeText() {
    this.estimateActions.verifyServiceSelectedSpyderOilChangeText();
  }

  @Then("^I verify 'Approve estimate' button")
  public void thenVerifyApproveEstimateButton() {
    this.estimateActions.verifyApproveEstimateButton();
  }

  @Then("^I click 'Approve estimate' button")
  public void thenClickApproveEstimateButton() {
    this.estimateActions.clickApproveEstimateButton();
  }

  // ******* ******* ******* Body Screen Step2 ******* ******* *******
  @Then("^I verify 'Review customer information' text")
  public void thenVerifyReviewCustomerInformationText() {
    this.estimateActions.verifyReviewCustomerInformationText();
  }

  @Then("^I verify 'Owner contact info' text")
  public void thenVerifyOwnerContactInfoText() {
    this.estimateActions.verifyOwnerContactInfoText();
  }

  @Then("^I verify 'Customer email' label")
  public void thenVerifyCustomerEmailLabel() {
    this.estimateActions.verifyCustomerEmailLabel();
  }

  @Then("^I verify 'Customer email' input")
  public void thenVerifyCustomerEmailInput() {
    this.estimateActions.verifyCustomerEmailInput();
  }

  @Then("^I verify 'Customer email' value text")
  public void thenVerifyCustomerEmailInputValueText() {
    this.estimateActions.verifyCustomerEmailInputValueText();
  }

  @Then("^I verify 'Customer home phone' label")
  public void thenVerifyCustomerHomePhoneLabel() {
    this.estimateActions.verifyCustomerHomePhoneLabel();
  }

  @Then("^I verify 'Customer home phone' input")
  public void thenVerifyCustomerHomePhoneInput() {
    this.estimateActions.verifyCustomerHomePhoneInput();
  }

  @Then("^I verify 'Customer home phone' value text")
  public void thenVerifyCustomerHomePhoneInputValueText() {
    this.estimateActions.verifyCustomerHomePhoneInputValueText();
  }

  @Then("^I verify 'Owner address' text")
  public void thenVerifyOwnerAddressText() {
    this.estimateActions.verifyOwnerAddressText();
  }

  @Then("^I verify 'Customer first name' label")
  public void thenVerifyCustomerFirstNameLabel() {
    this.estimateActions.verifyCustomerFirstNameLabel();
  }

  @Then("^I verify 'Customer first name' input")
  public void thenVerifyCustomerFirstNameInput() {
    this.estimateActions.verifyCustomerFirstNameInput();
  }

  @Then("^I verify 'Customer first name' value text")
  public void thenVerifyCustomerFirstNameInputValueText() {
    this.estimateActions.verifyCustomerFirstNameInputValueText();
  }

  @Then("^I verify 'Customer last name' label")
  public void thenVerifyCustomerLastNameLabel() {
    this.estimateActions.verifyCustomerLastNameLabel();
  }

  @Then("^I verify 'Customer last name' input")
  public void thenVerifyCustomerLastNameInput() {
    this.estimateActions.verifyCustomerLastNameInput();
  }

  @Then("^I verify 'Customer last name' value text")
  public void thenVerifyCustomerLastNameInputValueText() {
    this.estimateActions.verifyCustomerLastNameInputValueText();
  }

  @Then("^I verify 'Back' button")
  public void thenVerifyBackButton() {
    this.estimateActions.verifyBackButton();
  }

  @Then("^I verify 'Looks good' button")
  public void thenVerifyLooksGoodButton() {
    this.estimateActions.verifyLooksGoodButton();
  }

  @Then("^I click 'Looks good' button")
  public void thenClickLooksGoodButton() {
    this.estimateActions.clickLooksGoodButton();
  }

  // ******* ******* ******* Body Screen Step3 ******* ******* *******
  @Then("^I verify 'Double check and sign' text")
  public void thenVerifyDoubleCheckAndSignText() {
    this.estimateActions.verifyDoubleCheckAndSignText();
  }

  @Then("^I verify 'Contact information' text")
  public void thenVerifyContactInformationText() {
    this.estimateActions.verifyContactInformationText();
  }

  @Then("^I verify 'Customer email' text")
  public void thenVerifyCustomerEmailValueText() {
    this.estimateActions.verifyCustomerEmailValueText();
  }

  @Then("^I verify 'Personal information' text")
  public void thenVerifyPersonalInformationText() {
    this.estimateActions.verifyPersonalInformationText();
  }

  @Then("^I verify 'Customer full name' text")
  public void thenVerifyCustomerFullNameValueText() {
    this.estimateActions.verifyCustomerFullNameValueText();
  }

}
