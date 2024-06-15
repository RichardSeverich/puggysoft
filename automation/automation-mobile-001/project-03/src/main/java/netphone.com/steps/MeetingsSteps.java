package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.MeetingsActions;

/**
 * Steps.
 */
public class MeetingsSteps {

  private final MeetingsActions meetingsActions;

  /**
   * Constructor.
   */
  public MeetingsSteps() {
    this.meetingsActions = new MeetingsActions();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Integrations meetings tab' text is visible$")
  public void verifyIntegrations() {
    this.meetingsActions.verifyIntegrations();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Integrations Under Text' text is visible$")
  public void verifyIntegrationsUnderText() {
    this.meetingsActions.verifyIntegrationsUnderText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Gmail login button' text is visible$")
  public void verifyGmailLoginButton() {
    this.meetingsActions.verifyGmailLoginButton();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Microsoft login button' text is visible$")
  public void verifyMicrosoftLoginButton() {
    this.meetingsActions.verifyMicrosoftLoginButton();
  }

}
