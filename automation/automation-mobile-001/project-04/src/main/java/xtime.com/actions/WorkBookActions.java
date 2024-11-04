package xtime.com.actions;

import xtime.com.screens.WorkBookScreen;

public class WorkBookActions extends  AbstractActions {

  public WorkBookScreen workBookScreen;

  /**
   * Constructor
   * */
  public WorkBookActions() {
    this.workBookScreen = new WorkBookScreen();
  }

  // Head
  /** Verify Work book title text. */
  public void verifyWorkBookTitleText() {
    this.waitForDisplayed(this.workBookScreen.workBookTitleText);
  }

  /** Verify Btn main menu button. */
  public void verifyBtnMainMenuButton() {
    this.waitForDisplayed(this.workBookScreen.btnMainMenuButton);
  }

  /** Click Btn main menu button. */
  public void clickBtnMainMenuButton() {
    this.workBookScreen.btnMainMenuButton.click();
  }

  /** Verify Btn barcode walk in button. */
  public void verifyBtnBarcodeWalkInApptButton() {
    this.waitForDisplayed(this.workBookScreen.btnBarcodeWalkInAppt);
  }

  /** Verify Btn add walk in appt button. */
  public void verifyBtnAddWalkInApptButton() {
    this.waitForDisplayed(this.workBookScreen.btnAddWalkInAppt);
  }

  /** Click Btn add walk in appt button. */
  public void clickBtnAddWalkInApptButton() {
    this.workBookScreen.btnAddWalkInAppt.click();
  }

  // Left menu
  /** Verify left menu workbook Button. */
  public void verifyLeftMenuWorkbookButton() {
    this.waitForDisplayed(this.workBookScreen.leftMenuWorkbookButton);
  }

  /** Click left menu workbook Button. */
  public void clickLeftMenuWorkbookButton() {
    this.workBookScreen.leftMenuWorkbookButton.click();
  }

  /** Verify left menu search appointment Button. */
  public void verifyLeftMenuSearchAppointmentButton() {
    this.waitForDisplayed(this.workBookScreen.leftMenuSearchAppointmentButton);
  }

  /** Click left menu search appointment Button. */
  public void clickLeftMenuSearchAppointmentButton() {
    this.workBookScreen.leftMenuSearchAppointmentButton.click();
  }

  /** Verify left menu home customer messages Button. */
  public void verifyLeftMenuCustomerMessagesButton() {
    this.waitForDisplayed(this.workBookScreen.leftMenuCustomerMessagesButton);
  }

  /** Click left menu customer messages Button. */
  public void clickLeftMenuCustomerMessagesButton() {
    this.workBookScreen.leftMenuCustomerMessagesButton.click();
  }

  /** Verify left menu home release notes Button. */
  public void verifyLeftMenuReleaseNotesButton() {
    this.waitForDisplayed(this.workBookScreen.leftMenuReleaseNotesButton);
  }

  /** Click left menu release notes Button. */
  public void clickLeftMenuReleaseNotesButton() {
    this.workBookScreen.leftMenuReleaseNotesButton.click();
  }

  // Body header
  /** Verify previous date arrow button. */
  public void verifyPreviousDateArrowButton() {
    this.waitForDisplayed(this.workBookScreen.previousDateArrowButton);
  }

  /** Verify forward date arrow button. */
  public void verifyForwardDateArrowButton() {
    this.waitForDisplayed(this.workBookScreen.forwardDateArrowButton);
  }

  /** Verify advisor filter dropdown. */
  public void verifyAdvisorFilterDropdown() {
    this.waitForDisplayed(this.workBookScreen.advisorFilterDropDown);
  }

  /** Click advisor filter dropdown. */
  public void clickAdvisorFilterDropdown() {
    this.workBookScreen.advisorFilterDropDown.click();
  }

  /** Verify all advisors text in dropdown. */
  public void verifyAllAdvisorsTextInDropdown() {
    this.waitForDisplayed(this.workBookScreen.allAdvisorsTextInDropDown);
  }

  /** Verify status dropdown. */
  public void verifyStatusDropDown() {
    this.waitForDisplayed(this.workBookScreen.statusDropDown);
  }

  /** Click status dropdown. */
  public void clickStatusDropDown() {
    this.workBookScreen.statusDropDown.click();
  }

  /** Verify status dropdown apply button. */
  public void verifyStatusDropDownApplyButton() {
    this.waitForDisplayed(this.workBookScreen.statusDropDownApplyButton);
  }

  /** Click status dropdown apply button. */
  public void clickStatusDropDownApplyButton() {
    this.workBookScreen.statusDropDownApplyButton.click();
  }

  /** Verify status dropdown cancel button. */
  public void verifyStatusDropDownCancelButton() {
    this.waitForDisplayed(this.workBookScreen.statusDropDownCancelButton);
  }

  /** Click status dropdown cancel button. */
  public void clickStatusDropDownCancelButton() {
    this.workBookScreen.statusDropDownCancelButton.click();
  }

  /** Verify needs action button. */
  public void verifyNeedsActionButton() {
    this.waitForDisplayed(this.workBookScreen.needsActionButton);
  }
}
