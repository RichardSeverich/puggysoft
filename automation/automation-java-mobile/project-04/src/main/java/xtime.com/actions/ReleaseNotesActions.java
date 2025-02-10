package xtime.com.actions;

import xtime.com.screens.ReleaseNotesScreen;

public class ReleaseNotesActions extends  AbstractActions {

  public ReleaseNotesScreen releaseNotesScreen;

  /**
   * Constructor
   * */
  public ReleaseNotesActions() {
    this.releaseNotesScreen = new ReleaseNotesScreen();
  }

  /** Verify release notes tittle text. */
  public void verifyReleaseNotesTittleText() {
    this.waitForDisplayed(this.releaseNotesScreen.releaseNotesTittleText);
  }

  /** Verify version history text. */
  public void verifyVersionHistoryText() {
    this.waitForDisplayed(this.releaseNotesScreen.versionHistoryText);
  }

}
