package netphone.com.hooks;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import netphone.com.screens.AnyScreen;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;


/**
 * Hooks.
 * The very important thing to note here is:
 * Before(order = int) : This runs in increment order, means value 0 would run first and 1 would be after 0.
 * After(order = int) : This runs in decrements order, means Value 1 would run first and 0 would be after 1.
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
  @After(order = 1)
  public void afterScenario() {
    this.anyScreen.endSession();
    this.anyScreen.startSession();
  }

  @After(order = 2)
  public void embedScreenshot(Scenario scenario) {
    if (scenario.isFailed()) {
      try {
        byte[] sourcePath = ((TakesScreenshot) this.anyScreen.driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(sourcePath, "image/png");
      } catch (WebDriverException wde) {
        System.err.println(wde.getMessage());
      } catch (ClassCastException exception) {
        exception.printStackTrace();
      }
    }
  }

  /**
   * This will run before each Scenario.
   */
  @Before
  public void beforeScenario() {
  }

}
