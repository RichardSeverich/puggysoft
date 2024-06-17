package xtime.com.core;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import xtime.com.models.EnumPlatformName;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;


/** Driver. */
public class Driver {

  protected static Driver instance;
  protected AppiumDriver<?>  appiumDriver;
  protected WebDriverWait driverWait;
  private final DesiredCapabilities capabilities;
  private final Config config;

  /** Constructor. */
  public Driver() {
    this.config = Config.getInstance();
    this.capabilities = new DesiredCapabilities();
    // Device
    this.capabilities.setCapability("automationName", this.config.automationName);
    this.capabilities.setCapability("deviceName", this.config.deviceName);
    this.capabilities.setCapability("udid", this.config.udId);
    this.capabilities.setCapability("platformName", this.config.platformName);
    this.capabilities.setCapability("platformVersion", this.config.platformVersion);
    // Application
    if (this.config.app == null) {
      this.capabilities.setCapability("appPackage", this.config.appPackage);
      this.capabilities.setCapability("appActivity", this.config.appActivity);
    } else {
      this.capabilities.setCapability("app", this.config.app);
    }
    // Configurations
    this.capabilities.setCapability("noReset", this.config.noReset);
    this.capabilities.setCapability("clearSystemFiles", this.config.clearSystemFiles);
    // Hide keyboard
    this.capabilities.setCapability("unicodeKeyboard", this.config.unicodeKeyboard);
    this.capabilities.setCapability("resetKeyboard", this.config.resetKeyboard);
    // Auto Grant Permissions
    // iOS
    if (config.platformName.equals("iOS")) {
      this.capabilities.setCapability("autoAcceptAlerts", this.config.autoAcceptAlerts);
      this.capabilities.setCapability("appium:permissions", "{\"" + this.config.bundleId + "\""
              + ":{\"notifications\":\"YES\",\"contacts\":\"YES\",\"microphone\":\"YES\"}}");
    } else {
      // Android
      this.capabilities.setCapability("autoGrantPermissions", this.config.autoGrantPermissions);
    }
  }

  /** @return instance. */
  public static Driver getInstance() {
    if (instance == null) {
      instance = new Driver();
      instance.startSession();
    }
    return instance;
  }

  /** Start Session. */
  public void startSession() {
    try {
      URL url = new URL(config.appiumUrl);
      if (config.platformName.equals("iOS")) {
        this.appiumDriver = new IOSDriver<>(url, capabilities);
        this.config.enumPlatformName = EnumPlatformName.IOS;
      } else {
        this.appiumDriver = new AndroidDriver<>(url, capabilities);
        this.config.enumPlatformName = EnumPlatformName.ANDROID;
      }
      this.appiumDriver.manage().timeouts().implicitlyWait(config.implicitlyWaitSeconds, TimeUnit.SECONDS);
      this.driverWait =  new WebDriverWait(this.appiumDriver, this.config.explicitlyWaitSeconds);
    } catch (MalformedURLException exception) {
      System.out.println(exception.getMessage());
      exception.printStackTrace();
    }
  }

}
