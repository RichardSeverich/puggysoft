package xtime.com.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import xtime.com.actions.LoginChangeEnvActions;


/**
 * Steps.
 */
public class LoginChangeEnvSteps {

  private final LoginChangeEnvActions loginChangeEnvActions;

  /**
   * Constructor.
   */
  public LoginChangeEnvSteps() {
    this.loginChangeEnvActions = new LoginChangeEnvActions();
  }

  @Given("^I verify 'Input to set env code'")
  public void thenVerifyInputToSetEnvCode() {
    this.loginChangeEnvActions.verifyInputToSetEnvCode();
  }

  @Then("^I verify 'Back' Button")
  public void thenVerifyBackButton() {
    this.loginChangeEnvActions.verifyBackButton();
  }

  @Then("^I click 'Back' Button")
  public void thenClickBackButton() {
    this.loginChangeEnvActions.clickBackButton();
  }

  @Then("^I verify 'Select environment' text")
  public void thenVerifySelectEnvironmentText() {
    this.loginChangeEnvActions.verifySelectEnvironmentText();
  }

  @Then("^I verify 'Select environment' input")
  public void thenVerifySelectEnvironmentInput() {
    this.loginChangeEnvActions.verifySelectEnvironmentInput();
  }

  @Then("^I click 'Select environment' input")
  public void thenClickSelectEnvironmentInput() {
    this.loginChangeEnvActions.clickSelectEnvironmentInput();
  }

  @Then("^I set 'Select environment' input")
  public void thenSetSelectEnvironmentInput(String environmentName) {
    this.loginChangeEnvActions.setSelectEnvironmentInput(environmentName);
  }

  @Then("^I clean 'Select environment' input")
  public void thenCleanSelectEnvironmentInput() {
    this.loginChangeEnvActions.cleanSelectEnvironmentInput();
  }

  @Then("^I verify 'Done' button")
  public void thenVerifyDoneButton() {
    this.loginChangeEnvActions.verifyDoneButton();
  }

  @Then("^I verify 'Done' button is enable")
  public void thenVerifyDoneButtonIsEnable() {
    this.loginChangeEnvActions.verifyDoneButtonIsEnable();
  }

  @Then("^I verify 'Done' button is disable")
  public void thenVerifyDoneButtonIsDisable() {
    this.loginChangeEnvActions.verifyDoneButtonIsNotEnable();
  }

  @Then("^I click 'Done' button")
  public void thenClickDoneButton() {
    this.loginChangeEnvActions.clickDoneButton();
  }

  @Then("^I verify 'Environment'")
  public void thenVerifyEnvironment() {
    this.loginChangeEnvActions.verifyEnvironment();
  }

  @Then("^I set 'Env code'")
  public void thenSetEnvCode() {
    this.loginChangeEnvActions.setEnvCode();
  }

}
