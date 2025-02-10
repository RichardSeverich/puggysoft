package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.ServicesActions;


/**
 * Steps.
 */
public class ServicesSteps {

  private final ServicesActions servicesActions;

  /**
   * Constructor.
   */
  public ServicesSteps() {
    this.servicesActions = new ServicesActions();
  }

  // ******* ******* ******* Head ******* ******* *******
  @Given("^I verify 'Services' title text")
  public void givenVerifyServicesTittleText() {
    this.servicesActions.verifyServicesTittleText();
  }

  // ******* ******* ******* Body ******* ******* *******
  @Then("^I verify 'Package' tab")
  public void thenVerifyPackageTab() {
    this.servicesActions.verifyPackageTab();
  }

  @Then("^I verify 'Services' tab")
  public void thenVerifyServicesTab() {
    this.servicesActions.verifyServicesTab();
  }

  @Then("^I click 'Services' tab")
  public void thenClickServicesTab() {
    this.servicesActions.clickServicesTab();
  }

  @Then("^I verify 'Tires' tab")
  public void thenVerifyTiresTab() {
    this.servicesActions.verifyTiresTab();
  }

  @Then("^I verify 'Promotions' tab")
  public void thenVerifyPromotionsTab() {
    this.servicesActions.verifyPromotionsTab();
  }

  @Then("^I verify 'Review estimate' button")
  public void thenVerifyReviewEstimateButton() {
    this.servicesActions.verifyReviewEstimateButton();
  }

  // ******* ******* ******* Services tab ******* ******* *******
  @Then("^I verify services tab 'Spyder oil change' text")
  public void thenVerifyServicesTabSpyderOilChangeText() {
    this.servicesActions.verifyServicesTabSpyderOilChangeText();
  }

  @Then("^I verify services tab 'Spyder oil change' checkbox")
  public void thenVerifyServicesTabSpyderOilChangeCheckbox() {
    this.servicesActions.verifyServicesTabSpyderOilChangeCheckbox();
  }

  @Then("^I click services tab 'Spyder oil change' checkbox")
  public void thenClickServicesTabSpyderOilChangeCheckbox() {
    this.servicesActions.clickServicesTabSpyderOilChangeCheckbox();
  }

}
