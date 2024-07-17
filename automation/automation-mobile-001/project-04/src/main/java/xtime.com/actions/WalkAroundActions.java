package xtime.com.actions;

import xtime.com.screens.WalkAroundScreen;

public class WalkAroundActions extends  AbstractActions {

  public WalkAroundScreen walkAroundScreen;

  /**
   * Constructor
   * */
  public WalkAroundActions() {
    this.walkAroundScreen = new WalkAroundScreen();
  }

  // ******* ******* ******* Head ******* ******* *******
  /** Verify walk around tittle text. */
  public void verifyWalkAroundTittleText() {
    this.waitForDisplayed(this.walkAroundScreen.walkAroundTittleText);
  }

  // ******* ******* ******* Body ******* ******* *******
  /** Verify VRC button. */
  public void verifyVRCButton() {
    this.waitForDisplayed(this.walkAroundScreen.vRCButton);
  }

  /** Verify marc as no damage button. */
  public void verifyMarcAsNoDamageButton() {
    this.waitForDisplayed(this.walkAroundScreen.marcAsNoDamageButton);
  }

  /** Verify car drawing image. */
  public void verifyCarDrawingImage() {
    this.waitForDisplayed(this.walkAroundScreen.carDrawingImage);
  }

  // ******* ******* ******* Inspection options ******* ******* *******
  /** Verify body damage option. */
  public void verifyBodyDamageOption() {
    this.waitForDisplayed(this.walkAroundScreen.bodyDamageOption);
  }

  /** Click body damage option. */
  public void clickBodyDamageOption() {
    this.walkAroundScreen.bodyDamageOption.click();
  }

  /** Verify body damage select condition dropdown. */
  public void verifyBodyDamageSelectConditionDropdown() {
    this.waitForDisplayed(this.walkAroundScreen.bodyDamageSelectConditionDropdown);
  }

  /** Verify body damage now button. */
  public void verifyBodyDamageNowButton() {
    this.waitForDisplayed(this.walkAroundScreen.bodyDamageNowButton);
  }

  /** Verify body damage later button. */
  public void verifyBodyDamageLaterButton() {
    this.waitForDisplayed(this.walkAroundScreen.bodyDamageLaterButton);
  }

  /** Verify body damage never button. */
  public void verifyBodyDamageNeverButton() {
    this.waitForDisplayed(this.walkAroundScreen.bodyDamageNeverButton);
  }

  /** Verify Conditions affecting all tires option. */
  public void verifyConditionsAffectingAllTiresOption() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresOption);
  }

  /** Click Conditions affecting all tires option. */
  public void clickConditionsAffectingAllTiresOption() {
    this.walkAroundScreen.conditionsAffectingAllTiresOption.click();
  }

  /** Verify Conditions affecting all tires option Good button. */
  public void verifyConditionsAffectingAllTiresOptionGoodButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresOptionGoodButton);
  }

  /** Verify Conditions affecting all tires option Fair button. */
  public void verifyConditionsAffectingAllTiresOptionFairButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresOptionFairButton);
  }

  /** Verify Conditions affecting all tires option Poor button. */
  public void verifyConditionsAffectingAllTiresOptionPoorButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresOptionPoorButton);
  }

  /** Verify Conditions affecting all tires select condition dropdown. */
  public void verifyConditionsAffectingAllTiresSelectConditionDropdown() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresSelectConditionDropdown);
  }

  /** Verify Conditions affecting all tires Now button. */
  public void verifyConditionsAffectingAllTiresNowButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresNowButton);
  }

  /** Verify Conditions affecting all tires Later button. */
  public void verifyConditionsAffectingAllTiresLaterButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresLaterButton);
  }

  /** Verify Conditions affecting all tires Never button. */
  public void verifyConditionsAffectingAllTiresNeverButton() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresNeverButton);
  }

  /** Verify Conditions affecting all tires Rotate tires text. */
  public void verifyConditionsAffectingAllTiresRotateTiresText() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresRotateTiresText);
  }

  /** Verify Conditions affecting all tires Rotate tires check box. */
  public void verifyConditionsAffectingAllTiresRotateTiresCheckBox() {
    this.waitForDisplayed(this.walkAroundScreen.conditionsAffectingAllTiresRotateTiresCheckBox);
  }

  /** Click Conditions affecting all tires Rotate tires check box. */
  public void clickConditionsAffectingAllTiresRotateTiresCheckBox() {
    this.walkAroundScreen.conditionsAffectingAllTiresRotateTiresCheckBox.click();
  }

}
