package puggysoft;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

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
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        // Time to page load.
        driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.navigate().to("http://team-orange.preservica.co.uk/starter/login");
    }

    /**
     * Test 1.
     */
    @Test
    public void test1() {
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
        // Interact with Shadow root
        WebElement inputMetadataUrlShadowHost = driver.findElement(By.cssSelector("*[id='metaDataUrl']"));
        SearchContext inputMetadataUrlShadowRoot = inputMetadataUrlShadowHost.getShadowRoot();
        WebElement inputMetadataUrl = inputMetadataUrlShadowRoot.findElement(By.cssSelector("input"));
        Assert.assertEquals(inputMetadataUrl.getAttribute("value"), "https://dev-465374.oktapreview.com/app/exk1riiydtv7Ev6H30h8/sso/saml/metadata");
    }

    /**
     * After.
     */
    @AfterMethod
    public void tearDown() {
        driver.close();
    }
}
