package xtime.com.actions;

import org.openqa.selenium.Keys;
import xtime.com.screens.SelectDealershipScreen;

public class SelectDealershipActions extends  AbstractActions {

  public SelectDealershipScreen selectDealershipScreen;

  /**
   * Constructor
   * */
  public SelectDealershipActions() {
    this.selectDealershipScreen = new SelectDealershipScreen();
  }

  /** Verify select dealership text. */
  public void verifySelectDealershipText() {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipText);
  }

  /** Verify select dealership input. */
  public void verifySelectDealershipInput() {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipInput);
  }

  /** click select dealership input. */
  public void clickSelectDealershipInput() {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipInput);
  }

  /** set select dealership input. */
  public void setSelectDealershipInput(String keys) {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipInput);
    this.selectDealershipScreen.selectDealershipInput.click();
    this.selectDealershipScreen.selectDealershipInput.sendKeys(keys);
  }

  /** clean select dealership input. */
  public void cleanSelectDealershipInput() {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipInput);
    this.selectDealershipScreen.selectDealershipInput.click();
    this.selectDealershipScreen.selectDealershipInput.sendKeys(Keys.CONTROL + "a");
    this.selectDealershipScreen.selectDealershipInput.sendKeys(Keys.DELETE);
  }

  /** Verify dealership. */
  public void verifyDealership() {
    this.verifyMobileElementTextViewIsVisible(this.selectDealershipScreen.dealership);
  }

  /** Click dealership. */
  public void clickDealership() {
    this.clickMobileElementTextView(this.selectDealershipScreen.dealership);
  }

  /** Select dealership. */
  public void selectDealership() {
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipText);
    this.waitForDisplayed(this.selectDealershipScreen.selectDealershipInput);
    this.selectDealershipScreen.selectDealershipInput.click();
    this.selectDealershipScreen.selectDealershipInput.sendKeys(this.selectDealershipScreen.dealership);
    this.verifyMobileElementTextViewIsVisible(this.selectDealershipScreen.dealership);
    this.clickMobileElementTextView(this.selectDealershipScreen.dealership);
  }
}
