package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.ContactsActions;

public class ContactsSteps {

  private final ContactsActions contactsActions;

  public ContactsSteps() {
    this.contactsActions = new ContactsActions();
  }

  @Then("^I verify 'Company' text is visible$")
  public void verifyCompanyText() {
    this.contactsActions.verifyCompanyText();
  }

  @Then("^I verify 'Departments logo' text is visible$")
  public void verifyDepartmentsLogoText() {
    this.contactsActions.verifyDepartmentsLogoText();
  }

  @Then("^I verify 'Departments' text is visible$")
  public void verifyDepartmentsText() {
    this.contactsActions.verifyDepartmentsText();
  }

  @Then("^I verify 'Ring Groups logo' text is visible$")
  public void verifyRingGroupsLogoText() {
    this.contactsActions.verifyRingGroupsLogoText();
  }

  @Then("^I verify 'Ring Groups' text is visible$")
  public void verifyRingGroupsText() {
    this.contactsActions.verifyRingGroupsText();
  }

  @Then("^I verify 'Welcome Menus logo' text is visible$")
  public void verifyWelcomeMenusLogoText() {
    this.contactsActions.verifyWelcomeMenusLogoText();
  }

  @Then("^I verify 'Welcome Menus' text is visible$")
  public void verifyWelcomeMenusText() {
    this.contactsActions.verifyWelcomeMenusText();
  }

  @Then("^I verify 'Device' text is visible$")
  public void verifyDeviceText() {
    this.contactsActions.verifyDeviceText();
  }

  @Then("^I click 'Device' tab$")
  public void clickDeviceTab() {
    this.contactsActions.clickOnDeviceTab();
  }

  @Then("^I verify 'There are no contacts here' text is visible$")
  public void verifyThereAreNoContactsHereText() {
    this.contactsActions.verifyThereAreNoContactsHereText();
  }

}
