package puggysoft;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

/** Puggysoft */
@CucumberOptions(
  format = {
    "pretty",
    "html:target/test-report",
    "json:target/test-report.json",
    "junit:target/test-report.xml",
  },
  features = { "src/test/resources/features" },
  glue = { "puggysoft" }
)
public class Runner extends AbstractTestNGCucumberTests {

  /** Before all test.*/
  @BeforeTest
  public void login() {}

  /** After all test execution.*/
  @AfterTest
  public void closeBrowser() {}
}
