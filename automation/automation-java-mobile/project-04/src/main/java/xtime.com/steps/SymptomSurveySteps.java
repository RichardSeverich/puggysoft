package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.SymptomSurveyActions;


/**
 * Steps.
 */
public class SymptomSurveySteps {

  private final SymptomSurveyActions symptomSurveyActions;

  /**
   * Constructor.
   */
  public SymptomSurveySteps() {
    this.symptomSurveyActions = new SymptomSurveyActions();
  }

  // ******* ******* ******* Head ******* ******* *******
  @Given("^I verify 'Symptom survey' title text")
  public void givenVerifySymptomSurveyTittleText() {
    this.symptomSurveyActions.verifySymptomSurveyTittleText();
  }

  // ******* ******* ******* Body ******* ******* *******
  @Then("^I verify 'Symptom survey' sub title text")
  public void thenVerifySymptomSurveySubTittleText() {
    this.symptomSurveyActions.verifySymptomSurveySubTittleText();
  }

}
