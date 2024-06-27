package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import netphone.com.core.Screen;

/**
 * Aux Screen.
 */
public class AnyScreen extends Screen  {

  @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name='Done']")
  public MobileElement keyboardDoneButton;

  @iOSXCUITFindBy(xpath = "//XCUIElementTypeKey[@name=\"delete\"]")
  public MobileElement keyboardDeleteButton;

  @iOSXCUITFindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Select All\"]")
  public MobileElement textInputSelectAllButton;

  public void sleepInSeconds(int seconds) {
    try {
      Thread.sleep(seconds * 1000L);
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  /**
   * Constructor.
   */
  public AnyScreen() {
    super();
  }

}
