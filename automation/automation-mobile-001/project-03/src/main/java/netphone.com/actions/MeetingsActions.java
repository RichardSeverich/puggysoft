package netphone.com.actions;


import netphone.com.screens.MeetingsScreen;

/**
 * Meetings actions.
 */
public class MeetingsActions extends AbstractActions {

  public MeetingsScreen meetingsScreen;

  /**
   * Constructor.
   */
  public MeetingsActions() {
    this.meetingsScreen = new MeetingsScreen();
  }

  /**
   * Verification Integrations.
   */
  public void verifyIntegrations() {
    this.waitForDisplayed(this.meetingsScreen.integrationsText);
  }

  /**
   * Verification Integrations under text.
   */
  public void verifyIntegrationsUnderText() {
    this.waitForDisplayed(this.meetingsScreen.integrationsUnderText);
  }

  /**
   * Verification Gmail Login.
   */
  public void verifyGmailLoginButton() {
    this.waitForDisplayed(this.meetingsScreen.gmailLoginButton);
  }

  /**
   * Verification Microsoft Login.
   */
  public void verifyMicrosoftLoginButton() {
    this.waitForDisplayed(this.meetingsScreen.microsoftLoginButton);
  }

}
