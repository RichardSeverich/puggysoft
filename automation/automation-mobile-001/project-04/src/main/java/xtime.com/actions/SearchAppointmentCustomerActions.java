package xtime.com.actions;

import xtime.com.screens.SearchAppointmentCustomerScreen;

public class SearchAppointmentCustomerActions extends  AbstractActions {

  public SearchAppointmentCustomerScreen searchAppointmentCustomerScreen;
  /**
   * Constructor
   * */
  public SearchAppointmentCustomerActions() {
    this.searchAppointmentCustomerScreen = new SearchAppointmentCustomerScreen();
  }

  /** Verify didn't find what you where looking for text. */
  public void verifyDidntFindText() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.didntFindText);
  }

  /** Verify search OEM customer database button. */
  public void verifySearchOemCustomerDatabaseButton() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.searchOemCustomerDatabaseButton);
  }

  /** Verify Customer text. */
  public void verifyCustomerText() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.customerText);
  }

  /** Verify Customer name text. */
  public void verifyCustomerNameText() {
    this.verifyMobileElementTextViewIsVisible(this.searchAppointmentCustomerScreen.customer);
  }

  /** Verify edit customer button. */
  public void verifyEditCustomerButton() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.editCustomerButton);
  }

  /** Verify add vehicle to customer button. */
  public void verifyAddVehicleToCustomerButton() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.addVehicleToCustomerButton);
  }

  /** Verify customer vehicle name text. */
  public void verifyCustomerVehicleNameText() {
    this.verifyMobileElementTextViewIsVisible(this.searchAppointmentCustomerScreen.vehicle);
  }

  /** Verify check-in vehicle button. */
  public void verifyCheckInVehicleButton() {
    this.waitForDisplayed(this.searchAppointmentCustomerScreen.checkInVehicleButton);
  }

  /** Click check-in vehicle button. */
  public void clickCheckInVehicleButton() {
    this.searchAppointmentCustomerScreen.checkInVehicleButton.click();
  }

}
