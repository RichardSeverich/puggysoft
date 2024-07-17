package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.SearchAppointmentsActions;


/**
 * Steps.
 */
public class SearchAppointmentsSteps {

  private final SearchAppointmentsActions searchAppointmentsActions;

  /**
   * Constructor.
   */
  public SearchAppointmentsSteps() {
    this.searchAppointmentsActions = new SearchAppointmentsActions();
  }

  @Then("^I verify 'Search title' text")
  public void thenVerifySearchTittleText() {
    this.searchAppointmentsActions.verifySearchTittleText();
  }

  @Then("^I verify 'Add customer' button")
  public void thenVerifyAddCustomerButton() {
    this.searchAppointmentsActions.verifyAddCustomerButton();
  }

  @Then("^I click 'Add customer' button")
  public void thenClickAddCustomerButton() {
    this.searchAppointmentsActions.clickAddCustomerButton();
  }

  @Then("^I verify 'Search appointments' input")
  public void thenVerifySearchAppointmentsInput() {
    this.searchAppointmentsActions.verifySearchAppointmentsInput();
  }

  @Then("^I click 'Search appointments' input")
  public void thenClickSearchAppointmentsInput() {
    this.searchAppointmentsActions.clickSearchAppointmentsInput();
  }

  @Then("^I set customer 'Search appointments' input")
  public void thenSetCustomerSearchAppointmentsInput() {
    this.searchAppointmentsActions.setCustomerSearchAppointmentsInput();
  }

  @Then("^I verify 'Search additional days and customer info' Button")
  public void thenVerifySearchAdditionalDayAndCustomerInfoButton() {
    this.searchAppointmentsActions.verifySearchAdditionalDayAndCustomerInfoButton();
  }

  @Then("^I click 'Search additional days and customer info' Button")
  public void thenClickSearchAdditionalDayAndCustomerInfoButton() {
    this.searchAppointmentsActions.clickSearchAdditionalDayAndCustomerInfoButton();
  }

  // Add customer/vehicle screen
  @Then("^I verify 'Add customer/vehicle title' text")
  public void thenVerifyAddCustomerVehicleTittleText() {
    this.searchAppointmentsActions.verifyAddCustomerVehicleTittleText();
  }

  @Then("^I verify 'Customer information' text")
  public void thenVerifyCustomerInformationText() {
    this.searchAppointmentsActions.verifyCustomerInformationText();
  }

  @Then("^I verify 'Btn search back' button")
  public void thenVerifySearchBackButton() {
    this.searchAppointmentsActions.verifyBtnSearchBackButton();
  }

  @Then("^I click 'Btn search back' button")
  public void thenClickSearchBackButton() {
    this.searchAppointmentsActions.clickBtnSearchBackButton();
  }
}
