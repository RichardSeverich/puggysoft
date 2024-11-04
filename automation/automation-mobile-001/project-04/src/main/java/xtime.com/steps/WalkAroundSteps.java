package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.WalkAroundActions;


/**
 * Steps.
 */
public class WalkAroundSteps {

  private final WalkAroundActions walkAroundActions;

  /**
   * Constructor.
   */
  public WalkAroundSteps() {
    this.walkAroundActions = new WalkAroundActions();
  }

  // ******* ******* ******* Head ******* ******* *******
  @Given("^I verify 'Walk around' title text")
  public void givenVerifyWalkAroundTittleText() {
    this.walkAroundActions.verifyWalkAroundTittleText();
  }

  // ******* ******* ******* Body ******* ******* *******
  @Then("^I verify 'VRC' button")
  public void thenVerifyVRCButton() {
    this.walkAroundActions.verifyVRCButton();
  }

  @Then("^I verify 'Marc as no damage' button")
  public void thenVerifyMarcAsNoDamageButton() {
    this.walkAroundActions.verifyMarcAsNoDamageButton();
  }

  @Then("^I verify 'Car drawing' image")
  public void thenVerifyCarDrawingImage() {
    this.walkAroundActions.verifyCarDrawingImage();
  }

  // ******* ******* ******* Inspection options ******* ******* *******
  @Then("^I verify 'Body damage' option")
  public void thenVerifyBodyDamageOption() {
    this.walkAroundActions.verifyBodyDamageOption();
  }

  @Then("^I click 'Body damage' option")
  public void thenClickBodyDamageOption() {
    this.walkAroundActions.clickBodyDamageOption();
  }

  @Then("^I verify body damage 'Select condition' dropdown")
  public void thenVerifyBodyDamageSelectConditionDropdown() {
    this.walkAroundActions.verifyBodyDamageSelectConditionDropdown();
  }

  @Then("^I verify body damage 'Now' button")
  public void thenVerifyBodyDamageNowButton() {
    this.walkAroundActions.verifyBodyDamageNowButton();
  }

  @Then("^I verify body damage 'Later' button")
  public void thenVerifyBodyDamageLaterButton() {
    this.walkAroundActions.verifyBodyDamageLaterButton();
  }

  @Then("^I verify body damage 'Never' button")
  public void thenVerifyBodyDamageNeverButton() {
    this.walkAroundActions.verifyBodyDamageNeverButton();
  }

  @Then("^I verify 'Conditions affecting all tires' option")
  public void thenVerifyConditionsAffectingAllTiresOption() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresOption();
  }

  @Then("^I click 'Conditions affecting all tires' option")
  public void thenClickConditionsAffectingAllTiresOption() {
    this.walkAroundActions.clickConditionsAffectingAllTiresOption();
  }

  @Then("^I verify conditions affecting all tires 'Good' button")
  public void thenVerifyConditionsAffectingAllTiresOptionGoodButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresOptionGoodButton();
  }

  @Then("^I verify conditions affecting all tires 'Fair' button")
  public void thenVerifyConditionsAffectingAllTiresOptionFairButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresOptionFairButton();
  }

  @Then("^I verify conditions affecting all tires 'Poor' button")
  public void thenVerifyConditionsAffectingAllTiresOptionPoorButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresOptionPoorButton();
  }

  @Then("^I verify conditions affecting all tires 'Select condition' dropdown")
  public void thenVerifyConditionsAffectingAllTiresSelectConditionDropdown() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresSelectConditionDropdown();
  }

  @Then("^I verify conditions affecting all tires 'Now' button")
  public void thenVerifyConditionsAffectingAllTiresNowButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresNowButton();
  }

  @Then("^I verify conditions affecting all tires 'Later' button")
  public void thenVerifyConditionsAffectingAllTiresLaterButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresLaterButton();
  }

  @Then("^I verify conditions affecting all tires 'Never' button")
  public void thenVerifyConditionsAffectingAllTiresNeverButton() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresNeverButton();
  }

  @Then("^I verify conditions affecting all tires 'Rotate tires' text")
  public void thenVerifyConditionsAffectingAllTiresRotateTiresText() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresRotateTiresText();
  }

  @Then("^I verify conditions affecting all tires 'Rotate tires' checkBox")
  public void thenVerifyConditionsAffectingAllTiresRotateTiresCheckBox() {
    this.walkAroundActions.verifyConditionsAffectingAllTiresRotateTiresCheckBox();
  }

  @Then("^I click conditions affecting all tires 'Rotate tires' checkBox")
  public void thenClickConditionsAffectingAllTiresRotateTiresCheckBox() {
    this.walkAroundActions.clickConditionsAffectingAllTiresRotateTiresCheckBox();
  }

}
