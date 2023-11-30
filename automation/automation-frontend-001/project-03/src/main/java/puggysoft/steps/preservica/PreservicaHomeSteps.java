package puggysoft.steps.preservica;

import cucumber.api.java.en.Then;
import org.testng.Assert;
import puggysoft.pages.preservica.PreservicaHomePage;

/**
 * Steps.
 */
public class PreservicaHomeSteps {

    private PreservicaHomePage page;

    /**
     * Constructor.
     */
    public PreservicaHomeSteps() {
        this.page = new PreservicaHomePage();
    }

    /**
     * Method.
     */
    @Then("^I navigate to Security Settings page$")
    public void navigateSecuritySettings() {
        this.page.navigateToSecuritySettings();
    }

    /**
     * @param expectedText expectedText.
     */
    @Then("^I verify input metadata url \"([^\"]*)\" text contains$")
    public void verifyInputMetadataUrl(String expectedText) {
        String currentText = this.page.getInputMetadataUrlValue();
        Assert.assertTrue(currentText.contains(expectedText));
    }
}
