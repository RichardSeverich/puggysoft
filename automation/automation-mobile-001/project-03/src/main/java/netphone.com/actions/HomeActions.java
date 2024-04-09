package netphone.com.actions;


import netphone.com.screens.HomeScreen;

/**
 * Home actions.
 */
public class HomeActions extends AbstractActions {

  public HomeScreen homeScreen;

  /**
   * Constructor.
   */
  public HomeActions() {
    this.homeScreen = new HomeScreen();
  }

  /**
   * Verification home.
   */
  public void verifyHome() {
    this.waitForDisplayed(this.homeScreen.homeText);
  }

  /**
   * Verification calls.
   */
  public void verifyCalls() {
    this.waitForDisplayed(this.homeScreen.callsText);
  }

  /**
   * Verification Messenger.
   */
  public void verifyMessenger() {
    this.waitForDisplayed(this.homeScreen.messengerText);
  }

  /**
   * Verification Meetings.
   */
  public void verifyMeetings() {
    this.waitForDisplayed(this.homeScreen.meetingsText);
  }

  /**
   * Verification Contacts.
   */
  public void verifyContacts() {
    this.waitForDisplayed(this.homeScreen.contactsText);
  }

}
