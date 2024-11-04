package xtime.com.actions;

import xtime.com.screens.AddWalkInAppointmentScreen;

public class AddWalkInAppointmentActions extends  AbstractActions {

  public AddWalkInAppointmentScreen addWalkInAppointmentScreen;

  /**
   * Constructor
   * */
  public AddWalkInAppointmentActions() {
    this.addWalkInAppointmentScreen = new AddWalkInAppointmentScreen();
  }

  /** Verify add walk in appointment tittle text. */
  public void verifyAddWalkInAppointmentTittleText() {
    this.waitForDisplayed(this.addWalkInAppointmentScreen.addWalkInAppointmentTittleText);
  }

  /** Verify search customer/vehicle input. */
  public void verifySearchCustomerVehicleInput() {
    this.waitForDisplayed(this.addWalkInAppointmentScreen.searchCustomerVehicleInput);
  }

  /** Click search customer/vehicle input. */
  public void clickSearchCustomerVehicleInput() {
    this.addWalkInAppointmentScreen.searchCustomerVehicleInput.click();
  }

}
