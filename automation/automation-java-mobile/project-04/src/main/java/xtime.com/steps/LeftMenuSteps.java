package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.LeftMenuActions;


/**
 * Steps.
 */
public class LeftMenuSteps {

  private final LeftMenuActions leftMenuActions;

  /**
   * Constructor.
   */
  public LeftMenuSteps() {
    this.leftMenuActions = new LeftMenuActions();
  }

  @Then("^I verify 'User name' text")
  public void thenVerifyUserNameText() {
    this.leftMenuActions.verifyUserNameText();
  }

  @Then("^I verify 'User initials' text")
  public void thenVerifyUserInitialsText() {
    this.leftMenuActions.verifyUserInitialsText();
  }

  @Then("^I verify 'Dealership' text")
  public void thenVerifyDealershipText() {
    this.leftMenuActions.verifyDealershipText();
  }

  @Then("^I verify 'Workbook' left menu button")
  public void thenVerifyWorkBookLeftMenuButton() {
    this.leftMenuActions.verifyWorkBookLeftMenuButton();
  }

  @Then("^I click 'Workbook' left menu button")
  public void thenClickWorkBookLeftMenuButton() {
    this.leftMenuActions.clickWorkBookLeftMenuButton();
  }

  @Then("^I verify 'Search appointment' left menu button")
  public void thenVerifySearchLeftMenuButton() {
    this.leftMenuActions.verifySearchAppointmentLeftMenuButton();
  }

  @Then("^I click 'Search appointment' left menu button")
  public void thenClickSearchLeftMenuButton() {
    this.leftMenuActions.clickSearchAppointmentLeftMenuButton();
  }

  @Then("^I verify 'Customer messages' left menu button")
  public void thenVerifyCustomerMessagesLeftMenuButton() {
    this.leftMenuActions.verifyCustomerMessagesLeftMenuButton();
  }

  @Then("^I click 'Customer messages' left menu button")
  public void thenClickCustomerMessagesLeftMenuButton() {
    this.leftMenuActions.clickCustomerMessagesLeftMenuButton();
  }

  @Then("^I verify 'Release notes' left menu button")
  public void thenVerifyReleaseNotesLeftMenuButton() {
    this.leftMenuActions.verifyReleaseNotesLeftMenuButton();
  }

  @Then("^I click 'Release notes' left menu button")
  public void thenClickReleaseNotesLeftMenuButton() {
    this.leftMenuActions.clickReleaseNotesLeftMenuButton();
  }

  @Then("^I verify 'Switch dealership' button")
  public void thenVerifySwitchDealershipButton() {
    this.leftMenuActions.verifySwitchDealershipLeftMenuButton();
  }

  @Then("^I click 'Switch dealership' button")
  public void thenClickSwitchDealershipButton() {
    this.leftMenuActions.clickSwitchDealershipLeftMenuButton();
  }

  @Then("^I verify 'Sign out' button")
  public void thenVerifySignOutButton() {
    this.leftMenuActions.verifySignOutButton();
  }

  @Then("^I click 'Sign out' Button")
  public void thenClickSignOutButton() {
    this.leftMenuActions.clickSignOutButton();
  }

  @Then("^I verify 'Sign out' alert text")
  public void thenVerifySignOutAlertText() {
    this.leftMenuActions.verifySignOutAlertText();
  }

  @Then("^I verify 'Are you sure' alert text")
  public void thenVerifyAreYouSureAlertText() {
    this.leftMenuActions.verifyAreYouSureAlertText();
  }

  @Then("^I verify 'Sign out' alert button")
  public void thenVerifySignOutAlertButton() {
    this.leftMenuActions.verifySignOutAlertButton();
  }

  @Then("^I click 'Sign out' alert Button")
  public void thenClickSignOutAlertButton() {
    this.leftMenuActions.clickSignOutAlertButton();
  }

  @Then("^I verify 'Cancel' alert button")
  public void thenVerifyCancelAlertButton() {
    this.leftMenuActions.verifyCancelAlertButton();
  }

  @Then("^I click 'Cancel' alert Button")
  public void thenClickCancelAlertButton() {
    this.leftMenuActions.clickCancelAlertButton();
  }

}
