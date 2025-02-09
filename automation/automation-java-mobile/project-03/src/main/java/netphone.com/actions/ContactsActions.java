package netphone.com.actions;


import netphone.com.screens.ContactsScreen;

/**
 * Home actions.
 */
public class ContactsActions extends AbstractActions {

  public ContactsScreen contactsScreen;

  /**
   * Constructor.
   */
  public ContactsActions() {
    this.contactsScreen = new ContactsScreen();
  }

  /**
   * Verification Company text.
   */
  public void verifyCompanyText() {
    this.waitForDisplayed(this.contactsScreen.companyText);
  }

  /**
   * Verification Departments Logo text.
   */
  public void verifyDepartmentsLogoText() {
    this.waitForDisplayed(this.contactsScreen.departmentsLogoText);
  }

  /**
   * Verification Departments text.
   */
  public void verifyDepartmentsText() {
    this.waitForDisplayed(this.contactsScreen.departmentsText);
  }

  /**
   * Verification Ring groups logo text.
   */
  public void verifyRingGroupsLogoText() {
    this.waitForDisplayed(this.contactsScreen.ringGroupsLogoText);
  }

  /**
   * Verification Ring groups text.
   */
  public void verifyRingGroupsText() {
    this.waitForDisplayed(this.contactsScreen.ringGroupsText);
  }

  /**
   * Verification Welcome menus logo text.
   */
  public void verifyWelcomeMenusLogoText() {
    this.waitForDisplayed(this.contactsScreen.welcomeMenusLogoText);
  }

  /**
   * Verification Welcome menus text.
   */
  public void verifyWelcomeMenusText() {
    this.waitForDisplayed(this.contactsScreen.welcomeMenusText);
  }

  /**
   * Verification Device text.
   */
  public void verifyDeviceText() {
    this.waitForDisplayed(this.contactsScreen.deviceText);
    this.contactsScreen.deviceText.click();
  }

  /**
   * Verification Click on device.
   */
  public void clickOnDeviceTab() {
    this.contactsScreen.deviceText.click();
  }

  /**
   * Verification There are no contacts here text.
   */
  public void verifyThereAreNoContactsHereText() {
    this.waitForDisplayed(this.contactsScreen.thereAreNoContactsHereText);
  }

}
