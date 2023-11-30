package puggysoft.steps.preservica;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import puggysoft.pages.preservica.PreservicaLoginPage;

/**
 * Steps.
 */
public class PreservicaLoginSteps {

    private PreservicaLoginPage page;

    /**
     * Constructor.
     */
    public PreservicaLoginSteps() {
        this.page = new PreservicaLoginPage();
    }

    /**
     * navigate login page.
     */
    @Given("^I navigate login page$")
    public void navigateLoginPage() {
        this.page.navigate("http://team-orange.preservica.co.uk/starter/login");
    }

    /**
     * @param username username.
     * @param password password.
     */
    @When("^I login with username: \"([^\"]*)\" and password: \"([^\"]*)\"$")
    public void login(String username, String password) {
        this.page.login(username, password);
    }

    /**
     * Close browser.
     */
    @Then("^I close browser$")
    public void closeBrowser() {
        this.page.endSession();
    }

}
