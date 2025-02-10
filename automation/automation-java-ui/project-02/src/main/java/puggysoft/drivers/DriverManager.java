package puggysoft.drivers;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Created by Richard Severich.
 */
public final class DriverManager {
    private static final String CHROME_DRIVER = "webdriver.chrome.driver";
    private static final String CHROME_DRIVER_PATH = "../drivers/chromedriver.exe";
    private static final String PLATFORM = "platform";
    private static final String PLATFORM_ENV = "Windows 10";
    private static final int PAGE_LOAD_TIMEOUT = 15;
    private static final int IMPLICIT_WAIT = 15;


    private static DriverManager instance;
    private WebDriver webDriver;

    /**
     * Constructor.
     */
    private DriverManager() {
        // Configuration
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability(PLATFORM, PLATFORM_ENV);
        System.setProperty(CHROME_DRIVER, CHROME_DRIVER_PATH);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        this.webDriver = new ChromeDriver(options);
        this.webDriver.manage().timeouts().implicitlyWait(IMPLICIT_WAIT, TimeUnit.SECONDS);
        this.webDriver.manage().window().maximize();
    }

    /**
     * @return the singleton instance.
     */
    public static WebDriver getWebDriver() {
        if (instance == null) {
            instance = new DriverManager();
        }
        return instance.webDriver;
    }

}
