package xtime.com.actions;

import io.appium.java_client.MobileElement;
import xtime.com.screens.AnyScreen;
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
    this.waitForDisplayed(mobileElement);
    this.verifyElementText(mobileElement, expectedText);
  }

}
