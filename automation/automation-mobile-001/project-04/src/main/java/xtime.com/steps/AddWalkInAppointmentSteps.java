package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.AddWalkInAppointmentActions;


/**
 * Steps.
 */
public class AddWalkInAppointmentSteps {

  private final AddWalkInAppointmentActions addWalkInAppointmentActions;

  /**
   * Constructor.
   */
  public AddWalkInAppointmentSteps() {
    this.addWalkInAppointmentActions = new AddWalkInAppointmentActions();
  }

  @Then("^I verify 'Add walk in appointment' title text")
  public void verifyAddWalkInAppointmentTittleText() {
    this.addWalkInAppointmentActions.verifyAddWalkInAppointmentTittleText();
  }

  @Then("^I verify 'Search customer vehicle' input")
  public void verifySearchCustomerVehicleInput() {
    this.addWalkInAppointmentActions.verifySearchCustomerVehicleInput();
  }

  @Then("^I click 'Search customer vehicle' input")
  public void clickSearchCustomerVehicleInput() {
    this.addWalkInAppointmentActions.clickSearchCustomerVehicleInput();
  }

}
