package netphone.com.hooks;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import netphone.com.screens.AnyScreen;

/**
 * Hooks
 */
public class Hooks {

  private AnyScreen anyScreen;

  /**
   * Hooks.
   */
  public Hooks() {
    this.anyScreen = new AnyScreen();
  }

  /**
   * This will run after each Scenario.
   */
  @After
  public void afterScenario() {
    this.anyScreen.endSession();
    this.anyScreen.startSession();
  }

  /**
   * This will run before each Scenario.
   */
  @Before
  public void beforeScenario() {
  }

}
