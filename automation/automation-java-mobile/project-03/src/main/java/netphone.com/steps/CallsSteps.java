package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.CallsActions;

public class CallsSteps {

  private final CallsActions callsActions;

  public CallsSteps() {
    this.callsActions = new CallsActions();
  }

  @Then("^I verify 'Missed' text is visible$")
  public void verifyMissedText() {
    this.callsActions.verifyMissedText();
  }

  @Then("^I verify 'Voicemails' text is visible$")
  public void verifyVoicemailsTextText() {
    this.callsActions.verifyVoicemailsTextText();
  }

  @Then("^I verify 'Mine' button is visible$")
  public void verifyMineButtonText() {
    this.callsActions.verifyMineButtonText();
  }

  @Then("^I verify 'Company' button is visible$")
  public void verifyCompanyButtonText() {
    this.callsActions.verifyCompanyButtonText();
  }

  @Then("^I verify 'Call history empty' text is visible$")
  public void verifyCallHistoryEmptyText() {
    this.callsActions.verifyCallHistoryEmptyText();
  }

}
