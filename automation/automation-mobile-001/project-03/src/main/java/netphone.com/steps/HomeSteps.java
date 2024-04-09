package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.HomeActions;

/**
 * Steps.
 */
public class HomeSteps {

  private final HomeActions homeActions;

  /**
   * Constructor.
   */
  public HomeSteps() {
    this.homeActions = new HomeActions();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Home' text is visible$")
  public void verifyHome() {
    this.homeActions.verifyHome();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Calls' text is visible$")
  public void verifyCalls() {
    this.homeActions.verifyCalls();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Messenger' text is visible$")
  public void verifyMessenger() {
    this.homeActions.verifyMessenger();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Meetings' text is visible$")
  public void verifyMeetings() {
    this.homeActions.verifyMeetings();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Contacts' text is visible$")
  public void verifyContacts() {
    this.homeActions.verifyContacts();
  }

}
