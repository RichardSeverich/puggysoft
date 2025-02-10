package netphone.com;

import netphone.com.screens.HomeScreen;
import netphone.com.screens.LoginScreen;;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.testng.Assert.assertTrue;


/** Test class. */
public class LoginTest {
  private LoginScreen loginScreen;
  private HomeScreen homeScreen;

  /**
   * setUp.
   */
  @BeforeMethod
  public void beforeEachTest() {
    this.loginScreen = new LoginScreen();
    this.homeScreen = new HomeScreen();
  }

  /** Test1.
   *  @throws InterruptedException exception.
   *  */
  @Test
  public void test1() throws InterruptedException {
    Thread.sleep(5000);
    this.loginScreen.loginWithAdminCredentials();
    System.out.println();
    assertTrue(homeScreen.homeText.isDisplayed());
    assertTrue(homeScreen.callsText.isDisplayed());
    assertTrue(homeScreen.messengerText.isDisplayed());
    assertTrue(homeScreen.meetingsText.isDisplayed());
    assertTrue(homeScreen.contactsText.isDisplayed());
  }

  /** After all tests. */
  @AfterMethod
  public void afterEachTest() {
    this.loginScreen.endSession();
  }

}
