package puggysoft;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import puggysoft.pages.preservica.PreservicaHomePage;
import puggysoft.pages.preservica.PreservicaLoginPage;


/**
 * Test class.
 */
public class PreservicaLoginTest {

    private PreservicaLoginPage preservicaLoginPage;
    private PreservicaHomePage preservicaHomePage;

    /**
     * Before.
     */
    @BeforeMethod
    public void setUp() {
        this.preservicaLoginPage = new PreservicaLoginPage();
        this.preservicaHomePage = new PreservicaHomePage();
    }

    /**
     * Test 1.
     */
    @Test
    public void test1() {
        this.preservicaLoginPage.navigate("http://team-orange.preservica.co.uk/starter/login");
        this.preservicaLoginPage.login("admin", "admin");
        Assert.assertEquals(this.preservicaHomePage.getHomeHeaderWebElement().getText(), "Home");
        this.preservicaHomePage.navigateToSecuritySettings();
        String inputMetadataUrlValue = preservicaHomePage.getInputMetadataUrlValue();
        Assert.assertTrue(inputMetadataUrlValue.contains("/sso/saml/metadata"));
    }

    /**
     * After.
     */
    @AfterMethod
    public void tearDown() {
        this.preservicaLoginPage.endSession();
    }
}
