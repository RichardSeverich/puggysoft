package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.ReleaseNotesActions;


/**
 * Steps.
 */
public class ReleaseNotesSteps {

  private final ReleaseNotesActions releaseNotesActions;

  /**
   * Constructor.
   */
  public ReleaseNotesSteps() {
    this.releaseNotesActions = new ReleaseNotesActions();
  }

  @Then("^I verify 'Release notes' title text")
  public void thenVerifyReleaseNotesTittleText() {
    this.releaseNotesActions.verifyReleaseNotesTittleText();
  }

  @Then("^I verify 'Version history' text")
  public void thenVerifyVersionHistoryText() {
    this.releaseNotesActions.verifyVersionHistoryText();
  }

}
