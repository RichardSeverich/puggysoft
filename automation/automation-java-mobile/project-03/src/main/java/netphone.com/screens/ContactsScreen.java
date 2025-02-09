package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;
import netphone.com.core.Screen;

/**
 * Contacts Screen.
 */
public class ContactsScreen extends Screen {

  /** Constructor. */
  public ContactsScreen() {
    super();
  }

  //COMPANY
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Company\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Company\"]")
  public MobileElement companyText;

  //COMPANY DEPARTMENTS
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"D\"])")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name,\"D\")]")
  public MobileElement departmentsLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Departments\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name,\"Departments\")]")
  public MobileElement departmentsText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "(//XCUIElementTypeOther[@name=\"Departments\"])")
  public MobileElement departmentsArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "(//XCUIElementTypeOther[@name=\"Departments\"])")
  public MobileElement departmentsArrowBack;

  //COMPANY RING GROUPS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"R\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name,\"R\")]")
  public MobileElement ringGroupsLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Ring Groups\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[contains(@name,\"Ring Groups\")]")
  public MobileElement ringGroupsText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Ring Groups\"]")
  public MobileElement ringGroupsArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Ring Groups\"]")
  public MobileElement ringGroupsArrowBack;

  //COMPANY WELCOME MENUS
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"W\"]")
  public MobileElement welcomeMenusLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Welcome Menus\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"W Welcome Menus\"]")
  public MobileElement welcomeMenusText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Welcome Menus\"]")
  public MobileElement welcomeMenusArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Welcome Menus\"]")
  public MobileElement welcomeMenusArrowBack;

  //DEVICE
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Device\"]")
  @iOSXCUITFindBy(xpath = "//XCUIElementTypeOther[@name=\"Device\"]")
  public MobileElement deviceText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"There are no Contacts here\"]")
  public MobileElement thereAreNoContactsHereText;
}
