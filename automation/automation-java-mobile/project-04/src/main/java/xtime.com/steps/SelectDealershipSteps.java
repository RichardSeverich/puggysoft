package xtime.com.steps;

import cucumber.api.java.en.Then;
import xtime.com.actions.SelectDealershipActions;


/**
 * Steps.
 */
public class SelectDealershipSteps {

  private final SelectDealershipActions selectDealershipActions;

  /**
   * Constructor.
   */
  public SelectDealershipSteps() {
    this.selectDealershipActions = new SelectDealershipActions();
  }

  @Then("^I select 'Dealership'")
  public void selectDealership() {
    this.selectDealershipActions.selectDealership();
  }

}
