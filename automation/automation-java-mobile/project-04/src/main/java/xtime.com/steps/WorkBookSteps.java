package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.WorkBookActions;


/**
 * Steps.
 */
public class WorkBookSteps {

  private final WorkBookActions workBookActions;

  /**
   * Constructor.
   */
  public WorkBookSteps() {
    this.workBookActions = new WorkBookActions();
  }

  @Then("^I verify 'Workbook' title text")
  public void thenVerifyWorkBookTitleText() {
    this.workBookActions.verifyWorkBookTitleText();
  }

  @Then("^I verify 'Btn main menu' Button")
  public void thenVerifyBtnMainMenuButton() {
    this.workBookActions.verifyBtnMainMenuButton();
  }

  @Then("^I click 'Btn main menu' Button")
  public void thenClickBtnMainMenuButton() {
    this.workBookActions.clickBtnMainMenuButton();
  }

  @Then("^I verify 'Btn barcode walk in appt' Button")
  public void thenVerifyBtnBarcodeWalkInApptButton() {
    this.workBookActions.verifyBtnBarcodeWalkInApptButton();
  }

  @Then("^I verify 'Btn add walk in appt' Button")
  public void thenVerifyBtnAddWalkInApptButton() {
    this.workBookActions.verifyBtnAddWalkInApptButton();
  }

  @Then("^I click 'Btn add walk in appt' Button")
  public void thenClickBtnAddWalkInApptButton() {
    this.workBookActions.clickBtnAddWalkInApptButton();
  }

  // Left menu
  @Then("^I verify 'Workbook' Button")
  public void thenVerifyLeftMenuWorkBookButton() {
    this.workBookActions.verifyLeftMenuWorkbookButton();
  }

  @Then("^I click 'Workbook' Button")
  public void thenClickLeftMenuWorkBookButton() {
    this.workBookActions.clickLeftMenuWorkbookButton();
  }

  @Then("^I verify 'Search appointment' Button")
  public void thenVerifyLeftMenuHomeSearchAppointmentButton() {
    this.workBookActions.verifyLeftMenuSearchAppointmentButton();
  }

  @Then("^I click 'Search appointment' Button")
  public void thenClickLeftMenuHomeSearchAppointmentButton() {
    this.workBookActions.clickLeftMenuSearchAppointmentButton();
  }

  @Then("^I verify 'Customer messages' Button")
  public void thenVerifyLeftMenuHomeCustomerMessagesButton() {
    this.workBookActions.verifyLeftMenuCustomerMessagesButton();
  }

  @Then("^I click 'Customer messages' Button")
  public void thenClickLeftMenuHomeCustomerMessagesButton() {
    this.workBookActions.clickLeftMenuCustomerMessagesButton();
  }

  @Then("^I verify 'Release notes' Button")
  public void thenVerifyLeftMenuHomeReleaseNotesButton() {
    this.workBookActions.verifyLeftMenuReleaseNotesButton();
  }

  @Then("^I click 'Release notes' Button")
  public void thenClickLeftMenuHomeReleaseNotesButton() {
    this.workBookActions.clickLeftMenuReleaseNotesButton();
  }

  // Body header
  @Then("^I verify 'Previous date arrow' Button")
  public void thenVerifyPreviousDateArrowButton() {
    this.workBookActions.verifyPreviousDateArrowButton();
  }

  @Then("^I verify 'Forward date arrow' Button")
  public void thenVerifyForwardDateArrowButton() {
    this.workBookActions.verifyForwardDateArrowButton();
  }

  @Then("^I verify 'Advisor filter' Dropdown")
  public void thenVerifyAdvisorFilterDropdown() {
    this.workBookActions.verifyAdvisorFilterDropdown();
  }

  @Then("^I click 'Advisor filter' Dropdown")
  public void thenClickAdvisorFilterDropdown() {
    this.workBookActions.clickAdvisorFilterDropdown();
  }

  @Then("^I verify 'All advisors text' in Dropdown")
  public void thenVerifyAllAdvisorsTextInDropdown() {
    this.workBookActions.verifyAllAdvisorsTextInDropdown();
  }

  @Then("^I verify 'Status' Dropdown")
  public void thenVerifyStatusDropdown() {
    this.workBookActions.verifyStatusDropDown();
  }

  @Then("^I click 'Status' Dropdown")
  public void thenClickStatusDropdown() {
    this.workBookActions.clickStatusDropDown();
  }

  @Then("^I verify 'Status Apply' Button")
  public void thenVerifyStatusDropdownApplyButton() {
    this.workBookActions.verifyStatusDropDownApplyButton();
  }

  @Then("^I click 'Status Apply' Button")
  public void thenClickStatusDropdownApplyButton() {
    this.workBookActions.clickStatusDropDownApplyButton();
  }

  @Then("^I verify 'Status cancel' Button")
  public void thenVerifyStatusDropdownCancelButton() {
    this.workBookActions.verifyStatusDropDownCancelButton();
  }

  @Then("^I click 'Status cancel' Button")
  public void thenClickStatusDropdownCancelButton() {
    this.workBookActions.clickStatusDropDownCancelButton();
  }

  @Then("^I verify 'Needs action' Button")
  public void thenVerifyNeedsActionButton() {
    this.workBookActions.verifyNeedsActionButton();
  }

}
