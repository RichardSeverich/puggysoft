package netphone.com.actions;

import netphone.com.screens.CallsScreen;

/**
 * Actions.
 */
public class CallsActions extends AbstractActions {

  public CallsScreen callsScreen;

  /** Constructor. */
  public CallsActions() {
    this.callsScreen = new CallsScreen();
  }

  public void verifyMissedText() {
    this.waitForDisplayed(this.callsScreen.missedText);
  }

  public void verifyVoicemailsTextText() {
    this.waitForDisplayed(this.callsScreen.voicemailsText);
  }

  public void verifyMineButtonText() {
    this.waitForDisplayed(this.callsScreen.mineButton);
  }

  public void verifyCompanyButtonText() {
    this.waitForDisplayed(this.callsScreen.companyButton);
  }

  public void verifyCallHistoryEmptyText() {
    this.waitForDisplayed(this.callsScreen.callHistoryIsEmptyText);
    this.waitForDisplayed(this.callsScreen.callHistoryIsEmptyUnderText);
  }

}
