package xtime.com.actions;

import xtime.com.screens.CustomerMessagesScreen;

public class CustomerMessagesActions extends  AbstractActions {

  public CustomerMessagesScreen customerMessagesScreen;

  /**
   * Constructor
   * */
  public CustomerMessagesActions() {
    this.customerMessagesScreen = new CustomerMessagesScreen();
  }

  /** Verify customer messages tittle text. */
  public void verifyCustomerMessagesTittleText() {
    this.waitForDisplayed(this.customerMessagesScreen.customerMessagesTitleText);
  }

  /** Verify search messages input. */
  public void verifySearchMessagesInput() {
    this.waitForDisplayed(this.customerMessagesScreen.searchMessagesInput);
  }

  /** Click search messages input. */
  public void clickSearchMessagesInput() {
    this.customerMessagesScreen.searchMessagesInput.click();
  }

  /** Verify search customer button. */
  public void verifySearchCustomerButton() {
    this.waitForDisplayed(this.customerMessagesScreen.searchCustomerButton);
  }

  /** Click search customer button. */
  public void clickSearchCustomerButton() {
    this.customerMessagesScreen.searchCustomerButton.click();
  }

  /** Verify scan vin button. */
  public void verifyScanVinButton() {
    this.waitForDisplayed(this.customerMessagesScreen.scanVinButton);
  }

  /** Click scan vin button. */
  public void clickScanVinButton() {
    this.customerMessagesScreen.scanVinButton.click();
  }

}
