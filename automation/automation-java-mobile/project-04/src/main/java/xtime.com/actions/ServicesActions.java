package xtime.com.actions;

import xtime.com.screens.ServicesScreen;

public class ServicesActions extends  AbstractActions {

  public ServicesScreen servicesScreen;

  /**
   * Constructor
   * */
  public ServicesActions() {
    this.servicesScreen = new ServicesScreen();
  }

  // ******* ******* ******* Head ******* ******* *******
  /** Verify services tittle text. */
  public void verifyServicesTittleText() {
    this.waitForDisplayed(this.servicesScreen.servicesTittleText);
  }

  // ******* ******* ******* Body ******* ******* *******
  /** Verify package tab. */
  public void verifyPackageTab() {
    this.waitForDisplayed(this.servicesScreen.packageTab);
  }

  /** Verify services tab. */
  public void verifyServicesTab() {
    this.waitForDisplayed(this.servicesScreen.servicesTab);
  }

  /** Click services tab. */
  public void clickServicesTab() {
    this.servicesScreen.servicesTab.click();
  }

  /** Verify tires tab. */
  public void verifyTiresTab() {
    this.waitForDisplayed(this.servicesScreen.tiresTab);
  }

  /** Verify promotions tab. */
  public void verifyPromotionsTab() {
    this.waitForDisplayed(this.servicesScreen.promotionsTab);
  }

  /** Verify review estimate button. */
  public void verifyReviewEstimateButton() {
    this.waitForDisplayed(this.servicesScreen.reviewEstimateButton);
  }

  // ******* ******* ******* Services tab ******* ******* *******
  /** Verify services tab spyder oil change text. */
  public void verifyServicesTabSpyderOilChangeText() {
    this.waitForDisplayed(this.servicesScreen.servicesTabSpyderOilChangeText);
  }

  /** Verify services tab spyder oil change checkbox. */
  public void verifyServicesTabSpyderOilChangeCheckbox() {
    this.waitForDisplayed(this.servicesScreen.servicesTabSpyderOilChangeCheckbox);
  }

  /** Click services tab spyder oil change checkbox. */
  public void clickServicesTabSpyderOilChangeCheckbox() {
    this.servicesScreen.servicesTabSpyderOilChangeCheckbox.click();
  }

}
