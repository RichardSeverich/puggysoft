package xtime.com.actions;

import xtime.com.screens.SearchAppointmentScreen;

public class SearchAppointmentsActions extends  AbstractActions {

  public SearchAppointmentScreen searchAppointmentScreen;

  /**
   * Constructor
   * */
  public SearchAppointmentsActions() {
    this.searchAppointmentScreen = new SearchAppointmentScreen();
  }

  /** Verify search tittle text. */
  public void verifySearchTittleText() {
    this.waitForDisplayed(this.searchAppointmentScreen.searchTitleText);
  }

  /** Verify add customer button. */
  public void verifyAddCustomerButton() {
    this.waitForDisplayed(this.searchAppointmentScreen.addCustomerButton);
  }

  /** Click add customer button. */
  public void clickAddCustomerButton() {
    this.searchAppointmentScreen.addCustomerButton.click();
  }

  /** Verify search appointments input. */
  public void verifySearchAppointmentsInput() {
    this.waitForDisplayed(this.searchAppointmentScreen.searchAppointmentsInput);
  }

  /** Click search appointments input. */
  public void clickSearchAppointmentsInput() {
    this.searchAppointmentScreen.searchAppointmentsInput.click();
  }

  /** Set search appointments input. */
  public void setCustomerSearchAppointmentsInput() {
    this.waitForDisplayed(this.searchAppointmentScreen.searchAppointmentsInput);
    this.searchAppointmentScreen.searchAppointmentsInput.click();
    this.searchAppointmentScreen.searchAppointmentsInput.sendKeys(this.searchAppointmentScreen.customer);
  }

  /** Verify search additional days and customers information button. */
  public void verifySearchAdditionalDayAndCustomerInfoButton() {
    this.waitForDisplayed(this.searchAppointmentScreen.searchAdditionalDayAndCustomerInfoButton);
  }

  /** Click search additional days and customers information button. */
  public void clickSearchAdditionalDayAndCustomerInfoButton() {
    this.searchAppointmentScreen.searchAdditionalDayAndCustomerInfoButton.click();
  }

  // ******* ******* ******* ADD CUSTOMER VEHICLE SCREEN ******* ******* *******
  /** Verify add customer/vehicle tittle text. */
  public void verifyAddCustomerVehicleTittleText() {
    this.waitForDisplayed(this.searchAppointmentScreen.addCustomerVehicleTittleText);
  }

  /** Verify btn search back button. */
  public void verifyBtnSearchBackButton() {
    this.waitForDisplayed(this.searchAppointmentScreen.btnSearchBackButton);
  }

  /** Click btn search back button. */
  public void clickBtnSearchBackButton() {
    this.searchAppointmentScreen.btnSearchBackButton.click();
  }

  // Body
  /** Verify customer information text. */
  public void verifyCustomerInformationText() {
    this.waitForDisplayed(this.searchAppointmentScreen.customerInformationText);
  }

}
