package xtime.com.actions;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.ElementOption;
import xtime.com.models.EnumPlatformName;
import xtime.com.screens.AnyScreen;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.time.Duration;

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

  /**
   *
   * @param seconds Seconds to sleep.
   */
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
   * @param textView String.
   */
  public void verifyMobileElementTextViewIsVisible(String textView) {
    MobileElement mobileElement = this.anyScreen.getElementTextView(textView);
    this.waitForDisplayed(mobileElement);
  }

  /**
   *
   * @param textView String.
   */
  public void clickMobileElementTextView(String textView) {
    MobileElement mobileElement = this.anyScreen.getElementTextView(textView);
    mobileElement.click();
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
    String valueTextAttribute = mobileElement.getAttribute("text");
    this.softAssert.assertEquals(valueTextAttribute, expectedText);
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

  /**
   *
   * Hide keyboard IOS
   */
  public void hideKeyboardIos() {
    if (this.anyScreen.platformName == EnumPlatformName.IOS) {
      try {
        System.out.println("Keyboard is visible.");
        // this.anyScreen.keyboardDoneButton.click();
        // this.anyScreen.driver.executeScript("mobile: hideKeyboard", ImmutableMap.of("key", "Done"));
        // this.anyScreen.driver.executeScript("mobile: hideKeyboard", ImmutableMap.of("strategy", "tapOutside"));
      } catch (Exception e) {
        System.out.println("Keyboard is not visible.");
      }
    }
  }

  /**
   * Verification mobile element Text.
   */
  public void verifyMobileElementText(String text) {
    this.waitForDisplayed(this.anyScreen.getElementTextView(text));
  }

  /**
   * Verification mobile element Image.
   */
  public void verifyMobileElementImageViewIsVisible(String image) {
    this.waitForDisplayed(this.anyScreen.getElementImageView(image));
  }

  /**
   * Click mobile element Image.
   */
  public void clickMobileElementImage(String image) {
    MobileElement mobileElement = this.anyScreen.getElementImageView(image);
    mobileElement.click();
  }

  /**
   * Hold touch mobile element.
   */
  public void holdTouchByMobileElement(MobileElement element, Integer seconds) {
    new TouchAction<>(anyScreen.driver).press(ElementOption.element(element))
        .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(seconds)))
        .longPress(ElementOption.element(element)).perform();
  }

}
