package xtime.com.actions;

import xtime.com.screens.SymptomSurveyScreen;

public class SymptomSurveyActions extends  AbstractActions {

  public SymptomSurveyScreen symptomSurveyScreen;

  /**
   * Constructor
   * */
  public SymptomSurveyActions() {
    this.symptomSurveyScreen = new SymptomSurveyScreen();
  }

  // ******* ******* ******* Head ******* ******* *******
  /** Verify symptom survey tittle text. */
  public void verifySymptomSurveyTittleText() {
    this.waitForDisplayed(this.symptomSurveyScreen.symptomSurveyTittleText);
  }

  // ******* ******* ******* Body ******* ******* *******
  /** Verify symptom survey sub tittle text. */
  public void verifySymptomSurveySubTittleText() {
    this.waitForDisplayed(this.symptomSurveyScreen.symptomSurveySubTittleText);
  }

}
