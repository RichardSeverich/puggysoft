package netphone.com.core;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;


/** Screen Base. */
public abstract class Screen {

  private Config config;
  public AppiumDriver<?> driver;
  /// App credentials
  public String adminUsername;
  public String adminPassword;
  public String userUserName;
  public String userPassword;

  /** Constructor. */
  public Screen() {
    this.driver = Driver.getInstance().appiumDriver;
    // App credentials
    this.config = Config.getInstance();
    this.adminUsername = this.config.adminUsername;
    this.adminPassword = this.config.adminPassword;
    this.userUserName = this.config.userUsername;
    this.userPassword = this.config.userPassword;
    PageFactory.initElements(new AppiumFieldDecorator(this.driver), this);
  }

  /** End session. */
  public void endSession() {
    this.driver.quit();
  }

}
