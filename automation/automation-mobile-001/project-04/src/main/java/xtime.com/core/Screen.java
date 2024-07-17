package xtime.com.core;

import com.google.common.collect.ImmutableMap;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import xtime.com.models.EnumPlatformName;
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
  public String userUsername;
  public String userPassword;
  // App user info
  public String userName;
  public String userInitials;
  // App environment
  public String environmentCode;
  public String environmentName;
  // App running
  public String dealership;
  public String customer;
  public String vehicle;
  public String customerEmail;
  public String customerPhone;

  /** Constructor. */
  public Screen() {
    this.driver = Driver.getInstance().appiumDriver;
    this.driverWait = Driver.getInstance().driverWait;
    this.config = Config.getInstance();
    // App config
    this.platformName = this.config.enumPlatformName;
    this.bundleId = this.config.bundleId;
    // App credentials
    this.userUsername = this.config.userUsername;
    this.userPassword = this.config.userPassword;
    // App user info
    this.userName = this.config.userName;
    this.userInitials = this.config.userInitials;
    // App environment
    this.environmentCode = this.config.environmentCode;
    this.environmentName = this.config.environmentName;
    // App running
    this.dealership = this.config.dealership;
    this.customer = this.config.customer;
    this.vehicle = this.config.vehicle;
    this.customerEmail = this.config.customerEmail;
    this.customerPhone = this.config.customerPhone;
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

  public MobileElement getElementTextView(String textView) {
    String xpathTextViewAndroid = "//android.widget.TextView[@text=\"${textView}\"]";
    String xpath = xpathTextViewAndroid.replace("${textView}", textView);
    return this.getElementByXpath(xpath);
  }

  public MobileElement getElementImageView(String imageView) {
    String xpathImageViewAndroid = "//android.widget.ImageView[@content-desc=\"${imageView}\"]";
    String xpath = xpathImageViewAndroid.replace("${imageView}", imageView);
    return this.getElementByXpath(xpath);
  }

  public void sleepInSeconds(int seconds) {
    try {
      Thread.sleep(seconds * 1000L);
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  public MobileElement getElementByXpath(String xpath) {
    return (MobileElement) this.driver.findElement(By.xpath(xpath));
  }

}
