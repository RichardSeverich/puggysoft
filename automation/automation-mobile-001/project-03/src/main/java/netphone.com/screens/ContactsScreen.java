package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
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
  public MobileElement companyText;

  //COMPANY DEPARTMENTS
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"D\"])[1]")
  public MobileElement departmentsLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Departments\"]")
  public MobileElement departmentsText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement departmentsArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement departmentsArrowBack;

  //COMPANY RING GROUPS
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"R\"])[1]")
  public MobileElement ringGroupsLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Ring Groups\"]")
  public MobileElement ringGroupsText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement ringGroupsArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement ringGroupsArrowBack;

  //COMPANY WELCOME MENUS
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"W\"])[1]")
  public MobileElement welcomeMenusLogoText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Welcome Menus\"]")
  public MobileElement welcomeMenusText;

  @AndroidFindBy(xpath = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement welcomeMenusArrowIn;

  @AndroidFindBy(xpath = "//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup")
  public MobileElement welcomeMenusArrowBack;

  //DEVICE
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Device\"]")
  public MobileElement deviceText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"There are no Contacts here\"]")
  public MobileElement thereAreNoContactsHereText;
}
