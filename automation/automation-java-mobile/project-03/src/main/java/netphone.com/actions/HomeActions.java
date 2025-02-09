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

  /** Click. */
  public void clickHome() {
    this.homeScreen.homeText.click();
  }

  /**
   * Verification calls.
   */
  public void verifyCalls() {
    this.waitForDisplayed(this.homeScreen.callsText);
  }

  /** Click. */
  public void clickCalls() {
    this.homeScreen.callsText.click();
  }

  /**
   * Verification Messenger.
   */
  public void verifyMessenger() {
    this.waitForDisplayed(this.homeScreen.messengerText);
  }

  /** Click. */
  public void clickMessenger() {
    this.homeScreen.messengerText.click();
  }

  /**
   * Verification Meetings.
   */
  public void verifyMeetings() {
    this.waitForDisplayed(this.homeScreen.meetingsText);
  }

  /** Click. */
  public void clickMeetings() {
    this.homeScreen.meetingsText.click();
  }

  /**
   * Verification Contacts.
   */
  public void verifyContacts() {
    this.waitForDisplayed(this.homeScreen.contactsText);
  }

  /** Click. */
  public void clickContacts() {
    this.homeScreen.contactsText.click();
  }

  /**
   * Verification All Text.
   */
  public void verifyAllText() {
    this.waitForDisplayed(this.homeScreen.allText);
  }

  public void verifyNoActivitiesYetTextIos() {
    this.waitForDisplayed(this.homeScreen.noActivitiesYetText);
    this.waitForDisplayed(this.homeScreen.startAConversationText);
    this.waitForDisplayed(this.homeScreen.toUnlockChatText);
  }

  /**
   * Verification There Is Nothing Here Text.
   */
  public void verifyThereIsNothingHereText() {
    this.waitForDisplayed(this.homeScreen.thereIsNothingHereText);
  }
}
