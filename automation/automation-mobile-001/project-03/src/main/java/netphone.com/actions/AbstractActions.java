package netphone.com.actions;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;
import netphone.com.models.EnumPlatformName;
import netphone.com.screens.AnyScreen;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

/**
 * CommonActions.
 */
public abstract class AbstractActions {

  public AnyScreen anyScreen;
  public SoftAssert softAssert;
  /**
   * Constructor.
   */
  public AbstractActions() {
    this.anyScreen = new AnyScreen();
    this.softAssert = new SoftAssert();
  }

  public void sleepInSeconds(int seconds) {
    this.anyScreen.sleepInSeconds(seconds);
  }

  /**
   *
   * @param mobileElement mobile element.
   */
  public void waitForDisplayed(MobileElement mobileElement) {
    this.anyScreen
        .driverWait
        .until(ExpectedConditions.visibilityOf(mobileElement));
  }

  /**
   *
   * @param mobileElement mobile element.
   */
  public void verifyElementIsEnable(MobileElement mobileElement) {
    String isEnabled = mobileElement.getAttribute("enabled");
    Assert.assertEquals(isEnabled, "true");
  }

  /**
   *
   * @param mobileElement mobile element.
   */
  public void verifyElementIsNotEnable(MobileElement mobileElement) {
    String isEnabled = mobileElement.getAttribute("enabled");
    this.softAssert.assertEquals(isEnabled, "false");
  }

  /**
   *
   * @param mobileElement mobile element.
   * @param expectedText expected Text.
   */
  public void verifyElementText(MobileElement mobileElement, String expectedText) {
    String isEnabled = mobileElement.getAttribute("text");
    this.softAssert.assertEquals(isEnabled, expectedText);
  }

  /**
   *
   * @param mobileElement mobile element.
   * @param expectedText expected Text.
   */
  public void verifyElementDisplayedAndText(MobileElement mobileElement, String expectedText) {
    if (this.anyScreen.platformName == EnumPlatformName.IOS) {
      this.waitForDisplayed(mobileElement);
    } else {
      this.verifyElementText(mobileElement, expectedText);
    }
  }

  public void scroll(float start, float end) {
    int height = this.anyScreen.driver.manage().window().getSize().getHeight();
    int width = this.anyScreen.driver.manage().window().getSize().getWidth();

    // Get the size of the screen
    //Dimension size = this.anyScreen.driver.manage().window().getSize();
    // Coordinates for starting and ending points
    int startX = width / 2;
    int startY = (int) (height * start); // 0.8 -> Start from 80% down the screen
    int endY = (int) (height * end);   // 0.2 -> End at 20% of the screen

    // Perform the scroll
    TouchAction<?> action = new TouchAction<>(this.anyScreen.driver);
    action.press(PointOption.point(startX, startY))
            .moveTo(PointOption.point(startX, endY))
            .release()
            .perform();
  }

  public void hideKeyboardIos() {
    if (this.anyScreen.platformName == EnumPlatformName.IOS) {
      try {
        this.anyScreen.keyboardDoneButton.click();
        // this.anyScreen.driver.executeScript("mobile: hideKeyboard", ImmutableMap.of("key", "Done"));
        // this.anyScreen.driver.executeScript("mobile: hideKeyboard", ImmutableMap.of("strategy", "tapOutside"));
      } catch (Exception e) {
        System.out.println("Keyboard is not visible.");
      }
    }
  }
}
