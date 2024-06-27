package netphone.com.core;

import com.google.common.collect.ImmutableMap;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import netphone.com.models.EnumPlatformName;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.HashMap;


/** Screen Base. */
public abstract class Screen {

  private Config config;
  public AppiumDriver<?> driver;
  public WebDriverWait driverWait;
  // App config
  public EnumPlatformName platformName;
  public String bundleId;
  // App credentials
  public String adminUsername;
  public String adminPassword;
  public String userUserName;
  public String userPassword;
  public String adminInitials;
  public String adminName;
  public String adminExt;
  public String adminZone;
  public String adminCallerIdNumber;

  /** Constructor. */
  public Screen() {
    this.driver = Driver.getInstance().appiumDriver;
    this.driverWait = Driver.getInstance().driverWait;
    this.config = Config.getInstance();
    // App config
    this.platformName = this.config.enumPlatformName;
    this.bundleId = this.config.bundleId;
    // App credentials
    this.adminUsername = this.config.adminUsername;
    this.adminPassword = this.config.adminPassword;
    this.userUserName = this.config.userUsername;
    this.userPassword = this.config.userPassword;
    this.adminInitials = this.config.adminInitials;
    this.adminName = this.config.adminName;
    this.adminExt = this.config.adminExt;
    this.adminZone = this.config.adminZone;
    this.adminCallerIdNumber = this.config.adminCallerIdNumber;
    PageFactory.initElements(new AppiumFieldDecorator(this.driver), this);
  }

  /** End session. */
  public void endSession() {
    this.driver.quit();
  }

  /** resetApp. */
  public void resetApp() {
    this.driver.executeScript("mobile: terminateApp", ImmutableMap.of("bundleId", bundleId));
    this.driver.executeScript("mobile: removeApp", ImmutableMap.of("bundleId", bundleId));
    this.driver.executeScript("mobile: installApp", ImmutableMap.of("bundleId", bundleId, "app", this.config.app));
    this.driver.executeScript("mobile: activateApp", ImmutableMap.of("bundleId", bundleId));
    this.driver.executeScript("mobile: launchApp", ImmutableMap.of("bundleId", bundleId));
    // PERMISSIONS
    HashMap<String, Object> permissionArgs = new HashMap<>();
    permissionArgs.put("bundleId", bundleId);
    permissionArgs.put("permissions", new HashMap<String, String>() {{
        put("notifications", "YES");
        put("contacts", "YES");
        put("microphone", "YES");
        // Add more permissions as needed (e.g., camera, location, etc.)
      }});
    this.driver.executeScript("mobile: setPermissions", permissionArgs);
  }

  /** End session. */
  public void startSession() {
    Driver.getInstance().startSessionControlled();
  }

  public MobileElement getElementByXpath(String xpath) {
    return (MobileElement) this.driver.findElement(By.xpath(xpath));
  }
}
