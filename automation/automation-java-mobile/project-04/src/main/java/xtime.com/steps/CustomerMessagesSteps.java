package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.CustomerMessagesActions;


/**
 * Steps.
 */
public class CustomerMessagesSteps {

  private final CustomerMessagesActions customerMessagesActions;

  /**
   * Constructor.
   */
  public CustomerMessagesSteps() {
    this.customerMessagesActions = new CustomerMessagesActions();
  }

  @Then("^I verify 'Customer messages title' text")
  public void verifyCustomerMessagesTittleText() {
    this.customerMessagesActions.verifyCustomerMessagesTittleText();
  }

  @Then("^I verify 'Search messages' input")
  public void verifySearchMessagesInput() {
    this.customerMessagesActions.verifySearchMessagesInput();
  }

  @Then("^I click 'Search messages' input")
  public void clickSearchMessagesInput() {
    this.customerMessagesActions.clickSearchMessagesInput();
  }

  @Then("^I verify 'Search customer' button")
  public void verifySearchCustomerButton() {
    this.customerMessagesActions.verifySearchCustomerButton();
  }

  @Then("^I click 'Search Customer' button")
  public void clickSearchCustomerButton() {
    this.customerMessagesActions.clickSearchCustomerButton();
  }

  @Then("^I verify 'Scan vin' button")
  public void verifyScanVinButton() {
    this.customerMessagesActions.verifyScanVinButton();
  }

  @Then("^I click 'Scan vin' button")
  public void clickScanVinButton() {
    this.customerMessagesActions.clickScanVinButton();
  }

}
