package xtime.com.actions;

import xtime.com.screens.LeftMenuScreen;

public class LeftMenuActions extends  AbstractActions {

  public LeftMenuScreen leftMenuScreen;

  /**
   * Constructor
   * */
  public LeftMenuActions() {
    this.leftMenuScreen = new LeftMenuScreen();
  }

  /** Verify user name text. */
  public void verifyUserNameText() {
    this.verifyMobileElementTextViewIsVisible(this.leftMenuScreen.userName);
  }

  /** Verify user initials text. */
  public void verifyUserInitialsText() {
    this.verifyMobileElementTextViewIsVisible(this.leftMenuScreen.userInitials);
  }

  /** Verify dealership text. */
  public void verifyDealershipText() {
    this.verifyMobileElementTextViewIsVisible(this.leftMenuScreen.dealership);
  }

  /** Verify workbook left menu button. */
  public void verifyWorkBookLeftMenuButton() {
    this.waitForDisplayed(this.leftMenuScreen.workBookLeftMenuButton);
  }

  /** Click workbook left menu button. */
  public void clickWorkBookLeftMenuButton() {
    this.leftMenuScreen.workBookLeftMenuButton.click();
  }

  /** Verify search left menu button. */
  public void verifySearchAppointmentLeftMenuButton() {
    this.waitForDisplayed(this.leftMenuScreen.searchAppointmentLeftMenuButton);
  }

  /** Click search left menu button. */
  public void clickSearchAppointmentLeftMenuButton() {
    this.leftMenuScreen.searchAppointmentLeftMenuButton.click();
  }

  /** Verify customer messages left menu button. */
  public void verifyCustomerMessagesLeftMenuButton() {
    this.waitForDisplayed(this.leftMenuScreen.customerMessagesLeftMenuButton);
  }

  /** Click customer messages left menu button. */
  public void clickCustomerMessagesLeftMenuButton() {
    this.leftMenuScreen.customerMessagesLeftMenuButton.click();
  }

  /** Verify release notes left menu button. */
  public void verifyReleaseNotesLeftMenuButton() {
    this.waitForDisplayed(this.leftMenuScreen.releaseNotesLeftMenuButton);
  }

  /** Click release notes left menu button. */
  public void clickReleaseNotesLeftMenuButton() {
    this.leftMenuScreen.releaseNotesLeftMenuButton.click();
  }

  /** Verify switch dealership left menu button. */
  public void verifySwitchDealershipLeftMenuButton() {
    this.waitForDisplayed(this.leftMenuScreen.switchDealershipLeftMenuButton);
  }

  /** Click switch dealership left menu button. */
  public void clickSwitchDealershipLeftMenuButton() {
    this.leftMenuScreen.switchDealershipLeftMenuButton.click();
  }

  /** Verify sign out button. */
  public void verifySignOutButton() {
    this.waitForDisplayed(this.leftMenuScreen.signOutButton);
  }

  /** Click sign out button. */
  public void clickSignOutButton() {
    this.leftMenuScreen.signOutButton.click();
  }

  // Sign out Alert
  /** Verify sign out alert text. */
  public void verifySignOutAlertText() {
    this.waitForDisplayed(this.leftMenuScreen.signOutAlertText);
  }

  /** Verify are you sure alert text. */
  public void verifyAreYouSureAlertText() {
    this.waitForDisplayed(this.leftMenuScreen.areYouSureAlertText);
  }

  /** Verify sign out alert button. */
  public void verifySignOutAlertButton() {
    this.waitForDisplayed(this.leftMenuScreen.signOutAlertButton);
  }

  /** Click sign out alert button. */
  public void clickSignOutAlertButton() {
    this.leftMenuScreen.signOutAlertButton.click();
  }

  /** Verify cancel alert button. */
  public void verifyCancelAlertButton() {
    this.waitForDisplayed(this.leftMenuScreen.cancelAlertButton);
  }

  /** Click cancel alert button. */
  public void clickCancelAlertButton() {
    this.leftMenuScreen.cancelAlertButton.click();
  }

}
