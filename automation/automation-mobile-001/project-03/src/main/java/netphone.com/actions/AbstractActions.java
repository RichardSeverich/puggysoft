package netphone.com.actions;

import io.appium.java_client.MobileElement;
import netphone.com.screens.AnyScreen;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * CommonActions.
 */
public abstract class AbstractActions {

  public AnyScreen anyScreen;

  /**
   * Constructor.
   */
  public AbstractActions() {
    this.anyScreen = new AnyScreen();
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

}
