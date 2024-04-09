package netphone.com;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import io.appium.java_client.MobileElement;


/** Test class. */
public class LoginTest {
  private AppiumDriver driver;
  private WebDriverWait driverWait;
  private static final int SLEEP_TIME = 1000;
  // private WebDriver driver;
  // private AndroidDriver driver; has more specific for android.

  /**
  * @BeforeTest Only executed once.
  * @BeforeMethod executed for each test.
  * @throws MalformedURLException exception.
  */
  @BeforeMethod // Executed before each test
  public void setUp() throws MalformedURLException {
    //Set the Desired Capabilities
    DesiredCapabilities capabilities = new DesiredCapabilities();
    // Device
    capabilities.setCapability("automationName", "UIAutomator2");
    capabilities.setCapability("deviceName", "Pixel API 30 (Android 11.0)");
    capabilities.setCapability("udid", "emulator-5554");
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion", "11.0");
    // Application
    capabilities.setCapability("appPackage", "com.idt.n2p");
    capabilities.setCapability("appActivity", "com.idt.n2p.MainActivity");
    capabilities.setCapability("noReset", "true");
    // Hide keyboard
    capabilities.setCapability("unicodeKeyboard", true);
    capabilities.setCapability("resetKeyboard", true);

    // URL of appium server
    // http://192.168.0.7:4723/wd/hub
    URL url = new URL("http://192.168.0.7:4723");
    //Instantiate Appium Driver
    this.driver = new AndroidDriver(url, capabilities);
    this.driver.hideKeyboard();
    this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    this.driverWait =  new WebDriverWait(this.driver, 10); // time in seconds 10 seconds
  }

  /** Test1.
   * @throws InterruptedException exception.
   */
  @Test
  public void test1() throws InterruptedException {
    // Screen 1
    Thread.sleep(SLEEP_TIME);
    MobileElement letsGetStarterButton  = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"LET'S GET STARTED\"]"));
    letsGetStarterButton.click();
    Thread.sleep(SLEEP_TIME);
    // Screen 2
    // Verify texts
    MobileElement welcomeToText  = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text='Welcome to']"));
    MobileElement loginInputLabel  = (MobileElement) this.driver.findElement(By.xpath("//android.view.View[@text='Login']"));
    MobileElement doNotHaveAccountText  = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"Don't have an account?\"]"));
    MobileElement sigUpText  = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text='Sign Up']"));
    this.driverWait.until(ExpectedConditions.visibilityOf(welcomeToText));
    this.driverWait.until(ExpectedConditions.visibilityOf(loginInputLabel));
    this.driverWait.until(ExpectedConditions.visibilityOf(doNotHaveAccountText));
    this.driverWait.until(ExpectedConditions.visibilityOf(sigUpText));
    // Write the email.
    MobileElement emailTextBox = (MobileElement) this.driver.findElement(By.xpath("//android.widget.EditText[@resource-id='email']"));
    MobileElement nextButton = (MobileElement) this.driver.findElement(By.xpath("//android.widget.Button[@text='NEXT']"));
    this.driverWait.until(ExpectedConditions.visibilityOf(emailTextBox));
    this.driverWait.until(ExpectedConditions.visibilityOf(nextButton));
    emailTextBox.sendKeys("richard.severich+prod1@idt.net");
    nextButton.click();
    Thread.sleep(SLEEP_TIME);
    // Screen 3
    MobileElement passwordTextBox = (MobileElement) this.driver.findElement(By.xpath("//android.widget.EditText[@resource-id='password']"));
    passwordTextBox.sendKeys("idt12345");
    Thread.sleep(SLEEP_TIME);
    MobileElement loginButton = (MobileElement) this.driver.findElement(By.xpath("//android.widget.Button[@text='LOGIN']"));
    loginButton.click();
    Thread.sleep(SLEEP_TIME);
    // Home Page
    MobileElement homeText = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"HOME\"]"));
    this.driverWait.until(ExpectedConditions.visibilityOf(homeText));
    MobileElement callsText = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"Calls\"]"));
    this.driverWait.until(ExpectedConditions.visibilityOf(callsText));
    MobileElement messengerText = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"Messenger\"]"));
    this.driverWait.until(ExpectedConditions.visibilityOf(messengerText));
    MobileElement meetingsText = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"Meetings\"]"));
    this.driverWait.until(ExpectedConditions.visibilityOf(meetingsText));
    MobileElement contactsText = (MobileElement) this.driver.findElement(By.xpath("//android.widget.TextView[@text=\"Contacts\"]"));
    this.driverWait.until(ExpectedConditions.visibilityOf(contactsText));
  }

  /** After. */
  @AfterMethod
  public void tearDown() {
    this.driver.quit();
  }

}
