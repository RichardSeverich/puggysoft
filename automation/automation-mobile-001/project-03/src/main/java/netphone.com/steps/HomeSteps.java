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

  @Then("^I go to 'Home' screen$")
  public void goHome() {
    this.homeActions.clickHome();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Calls' text is visible$")
  public void verifyCalls() {
    this.homeActions.verifyCalls();
  }

  @Then("^I go to 'Calls' screen$")
  public void goCalls() {
    this.homeActions.clickCalls();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Messenger' text is visible$")
  public void verifyMessenger() {
    this.homeActions.verifyMessenger();
  }

  @Then("^I go to 'Messenger' screen$")
  public void goMessenger() {
    this.homeActions.clickMessenger();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Meetings' text is visible$")
  public void verifyMeetings() {
    this.homeActions.verifyMeetings();
  }

  @Then("^I go to 'Meetings' screen$")
  public void goMeetings() {
    this.homeActions.clickMeetings();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Contacts' text is visible$")
  public void verifyContacts() {
    this.homeActions.verifyContacts();
  }

  @Then("^I go to 'Contacts' screen$")
  public void goContacts() {
    this.homeActions.clickContacts();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'All' text is visible$")
  public void verifyAllText() {
    this.homeActions.verifyAllText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'There is nothing here' text is visible$")
  public void verifyThereIsNothingHereText() {
    this.homeActions.verifyThereIsNothingHereText();
  }

  /**
   * Verify.
   */
  @Then("^I go to 'Profile Settings' screen$")
  public void verifyUserSettingsButton() {
    this.homeActions.clickProfileSettingsButton();
  }
}
