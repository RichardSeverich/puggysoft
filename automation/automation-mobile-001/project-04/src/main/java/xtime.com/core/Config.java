package xtime.com.core;

import xtime.com.models.EnumPlatformName;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/** Class. */
public final class Config {
  private static Config instance;
  // Desired Capabilities
  protected  boolean clearSystemFiles;
  protected String automationName;
  protected String deviceName;
  protected String udId;
  protected String platformName;
  protected String platformVersion;
  protected String appPackage;
  protected String appActivity;
  protected String app;
  protected boolean autoGrantPermissions;
  protected boolean autoAcceptAlerts;
  protected boolean noReset;
  protected boolean unicodeKeyboard;
  protected boolean resetKeyboard;
  // Config
  protected String appiumUrl;
  protected String bundleId;
  protected int implicitlyWaitSeconds;
  protected int explicitlyWaitSeconds;
  // App credentials
  protected String adminUsername;
  protected String adminPassword;
  protected String userUsername;
  protected String userPassword;
  protected EnumPlatformName enumPlatformName;

  /** Constructor read config properties file. */
  private Config() {
    try (InputStream input = new FileInputStream("config.properties")) {
      Properties prop = new Properties();
      prop.load(input);
      // Desired Capabilities
      clearSystemFiles = prop.getProperty("desiredCapabilities.clearSystemFiles").equals("true");
      automationName = prop.getProperty("desiredCapabilities.automationName");
      deviceName = prop.getProperty("desiredCapabilities.deviceName");
      udId = prop.getProperty("desiredCapabilities.udid");
      platformName = prop.getProperty("desiredCapabilities.platformName");
      platformVersion = prop.getProperty("desiredCapabilities.platformVersion");
      // option 1
      appPackage = prop.getProperty("desiredCapabilities.appPackage");
      appActivity = prop.getProperty("desiredCapabilities.appActivity");
      // option 2
      app = prop.getProperty("desiredCapabilities.app");
      autoGrantPermissions = prop.getProperty("desiredCapabilities.autoGrantPermissions").equals("true");
      autoAcceptAlerts = prop.getProperty("desiredCapabilities.autoAcceptAlerts").equals("true");
      noReset = prop.getProperty("desiredCapabilities.noReset").equals("true");
      unicodeKeyboard = prop.getProperty("desiredCapabilities.unicodeKeyboard").equals("true");
      resetKeyboard = prop.getProperty("desiredCapabilities.resetKeyboard").equals("true");
      // Config
      appiumUrl = prop.getProperty("appium.url");
      bundleId = prop.getProperty("app.bundle.identifier");
      implicitlyWaitSeconds = Integer.parseInt(prop.getProperty("selenium.implicitlyWaitSeconds"));
      explicitlyWaitSeconds = Integer.parseInt(prop.getProperty("selenium.explicitWaitSeconds"));
      // App credentials
      adminUsername = prop.getProperty("admin.username");
      adminPassword = prop.getProperty("admin.password");
      userUsername = prop.getProperty("user.username");
      userPassword = prop.getProperty("user.password");
    } catch (IOException exception) {
      System.out.println(exception.getMessage());
      exception.printStackTrace();
    }
  }

  /** @return instance.*/
  public static Config getInstance() {
    if (instance == null) {
      instance = new Config();
    }
    return instance;
  }

}
