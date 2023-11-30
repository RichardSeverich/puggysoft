package puggysoft;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Test class.
 */
public class PreservicaLoginTest {
    private WebDriver driver;

    /**
     * Before.
     */
    @BeforeMethod
    public void setUp() {
        // Configuration
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("platform", "Windows 10");
        System.setProperty("webdriver.chrome.driver", "../drivers/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
        // Time when findElement.
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        // Time to page load.
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.navigate().to("http://team-orange.preservica.co.uk/starter/login");
    }

    /**
     * @param shadowHost shadowHost.
     * @return WebElement.
     */
    public WebElement getShadowRootElement(WebElement shadowHost) {
        WebElement returnObj = null;
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
        Object shadowRoot = javascriptExecutor.executeScript("return arguments[0].shadowRoot", shadowHost);
        if (shadowRoot instanceof WebElement) {
            // ChromeDriver 95
            returnObj = (WebElement) shadowRoot;
        } else if (shadowRoot instanceof Map) {
            // ChromeDriver 96+
            Map<String, Object> shadowRootMap = (Map<String, Object>) shadowRoot;
            String shadowRootKey = (String) shadowRootMap.keySet().toArray()[0];
            String id = (String) shadowRootMap.get(shadowRootKey);
            RemoteWebElement remoteWebElement = new RemoteWebElement();
            remoteWebElement.setParent((RemoteWebDriver) driver);
            remoteWebElement.setId(id);
            returnObj = remoteWebElement;
        } else {
            System.out.println("Unexpected return type for shadowRoot in getShadowRootElement()");
        }
        return returnObj;
    }

    /**
     * Test 1.
     *
     * @throws InterruptedException InterruptedException.
     */
    @Test
    public void test1() throws InterruptedException {
        // Login
        WebElement inputUsername = driver.findElement(By.id("username"));
        inputUsername.sendKeys("admin");
        WebElement inputPassword = driver.findElement(By.id("loginPassword"));
        inputPassword.sendKeys("admin");
        WebElement buttonLogin = driver.findElement(By.cssSelector("button[data-testid='login-submit']"));
        buttonLogin.click();
        WebElement homeHeader = driver.findElement(By.cssSelector("*[data-testid='explorer-header']"));
        Assert.assertEquals(homeHeader.getText(), "Home");
        // Navigate to user settings
        WebElement userSettingsLink = driver.findElement(By.cssSelector("*[data-testid='user-settings-link']"));
        userSettingsLink.click();
        WebElement securityTab = driver.findElement(By.cssSelector("*[data-testid='security-tab']"));
        securityTab.click();
        // Wait 5 seconds
        Thread.sleep(5000);
        // Verify login URL
        WebElement inputLoginUrlShadowHost = driver.findElement(By.cssSelector("preservica-input[id='login-url']"));
        WebElement inputLoginUrlShadowRoot = getShadowRootElement(inputLoginUrlShadowHost);
        WebElement inputLoginUrl = inputLoginUrlShadowRoot.findElement(By.cssSelector("input"));
        Assert.assertTrue(inputLoginUrl.getAttribute("value").contains("starter/login"));
        // Verify Metadata URL
        WebElement inputMetadataUrlShadowHost = driver
            .findElement(By.cssSelector("preservica-input[id='metaDataUrl']"));
        WebElement inputMetadataUrlShadowRoot = getShadowRootElement(inputMetadataUrlShadowHost);
        WebElement inputMetadataUrl = inputMetadataUrlShadowRoot.findElement(By.cssSelector("input"));
        Assert.assertTrue(inputMetadataUrl.getAttribute("value").contains("sso/saml/metadata"));
        // Change from SAML SSO to LDAP
        // Click Select element.
        WebElement selectAuthModelShadowHost = driver.findElement(By.cssSelector("preservica-select"));
        WebElement selectAuthModelShadowRoot = getShadowRootElement(selectAuthModelShadowHost);
        WebElement selectAuthModel = selectAuthModelShadowRoot
            .findElement(By.cssSelector("div[class='wrapper'] > div[class*='customSelect']"));
        selectAuthModel.click();
        // Select
        // LDAP preservica-select > preservica-select-option
        // SAML preservica-select > preservica-select-option:nth-child(2)
        WebElement selectAuthModelOptionLDAPShadowHost = driver
            .findElement(By.cssSelector("preservica-select > preservica-select-option"));
        WebElement selectAuthModelOptionLDAPShadowRoot = getShadowRootElement(selectAuthModelOptionLDAPShadowHost);
        WebElement selectAuthModelOptionLDAP = selectAuthModelOptionLDAPShadowRoot.findElement(By.cssSelector("span"));
        selectAuthModelOptionLDAP.click();
    }

    /**
     * After.
     */
    @AfterMethod
    public void tearDown() {
        driver.close();
    }
}
