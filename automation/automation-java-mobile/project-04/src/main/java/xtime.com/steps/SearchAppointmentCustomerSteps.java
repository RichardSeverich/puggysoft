package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.SearchAppointmentCustomerActions;


/**
 * Steps.
 */
public class SearchAppointmentCustomerSteps {

  private final SearchAppointmentCustomerActions searchAppointmentCustomerActions;

  /**
   * Constructor.
   */
  public SearchAppointmentCustomerSteps() {
    this.searchAppointmentCustomerActions = new SearchAppointmentCustomerActions();
  }

  @Then("^I verify 'Didnt find what you where looking for' text")
  public void thenVerifyDidntFindText() {
    this.searchAppointmentCustomerActions.verifyDidntFindText();
  }

  @Then("^I verify 'Search OEM customer database' button")
  public void thenVerifySearchOemCustomerDatabaseButton() {
    this.searchAppointmentCustomerActions.verifySearchOemCustomerDatabaseButton();
  }

  @Then("^I verify 'Customer' text")
  public void thenVerifyCustomerText() {
    this.searchAppointmentCustomerActions.verifyCustomerText();
  }

  @Then("^I verify 'Customer name' text")
  public void thenVerifyCustomerNameText() {
    this.searchAppointmentCustomerActions.verifyCustomerNameText();
  }

  @Then("^I verify 'Edit customer' button")
  public void thenVerifyEditCustomerButton() {
    this.searchAppointmentCustomerActions.verifyEditCustomerButton();
  }

  @Then("^I verify 'Add vehicle to customer' Button")
  public void thenVerifyAddVehicleToCustomerButton() {
    this.searchAppointmentCustomerActions.verifyAddVehicleToCustomerButton();
  }

  @Then("^I verify 'Vehicle name' text")
  public void thenVerifyCustomerVehicleNameText() {
    this.searchAppointmentCustomerActions.verifyCustomerVehicleNameText();
  }

  @Then("^I verify 'Check in' Button")
  public void thenVerifyCheckInVehicleButton() {
    this.searchAppointmentCustomerActions.verifyCheckInVehicleButton();
  }

  @Then("^I click 'Check in' Button")
  public void thenClickCheckInVehicleButton() {
    this.searchAppointmentCustomerActions.clickCheckInVehicleButton();
  }

}
