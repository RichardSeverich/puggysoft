package xtime.com.actions;

import org.openqa.selenium.Keys;
import xtime.com.screens.LoginChangeEnvScreen;

public class LoginChangeEnvActions extends  AbstractActions {

  public LoginChangeEnvScreen loginChangeEnvScreen;

  /**
   * Constructor
   * */
  public LoginChangeEnvActions() {
    this.loginChangeEnvScreen = new LoginChangeEnvScreen();
  }

  // SCREEN 1
  /** Verify input to set code. */
  public void verifyInputToSetEnvCode() {
    this.waitForDisplayed(this.loginChangeEnvScreen.pinCodeInput1);
    this.waitForDisplayed(this.loginChangeEnvScreen.pinCodeInput2);
    this.waitForDisplayed(this.loginChangeEnvScreen.pinCodeInput3);
    this.waitForDisplayed(this.loginChangeEnvScreen.pinCodeInput4);
  }

  /** Verify back button. */
  public void verifyBackButton() {
    this.waitForDisplayed(this.loginChangeEnvScreen.backButton);
  }

  /** Click back button. */
  public void clickBackButton() {
    this.loginChangeEnvScreen.backButton.click();
  }

  // SCREEN 2
  /** Verify select environment text. */
  public void verifySelectEnvironmentText() {
    this.waitForDisplayed(this.loginChangeEnvScreen.selectEnvironmentText);
  }

  /** Verify select environment input. */
  public void verifySelectEnvironmentInput() {
    this.waitForDisplayed(this.loginChangeEnvScreen.selectEnvironmentInput);
  }

  /** Click select environment input. */
  public void clickSelectEnvironmentInput() {
    this.loginChangeEnvScreen.selectEnvironmentInput.click();
  }

  /** Set select environment input. */
  public void setSelectEnvironmentInput(String environmentName) {
    this.waitForDisplayed(this.loginChangeEnvScreen.selectEnvironmentInput);
    this.loginChangeEnvScreen.selectEnvironmentInput.click();
    this.loginChangeEnvScreen.selectEnvironmentInput.sendKeys(environmentName);
  }

  /** Clean select environment input. */
  public void cleanSelectEnvironmentInput() {
    this.waitForDisplayed(this.loginChangeEnvScreen.selectEnvironmentInput);
    this.loginChangeEnvScreen.selectEnvironmentInput.click();
    this.loginChangeEnvScreen.selectEnvironmentInput.sendKeys(Keys.CONTROL + "a");
    this.loginChangeEnvScreen.selectEnvironmentInput.sendKeys(Keys.DELETE);
  }

  /** Verify done button. */
  public void verifyDoneButton() {
    this.waitForDisplayed(this.loginChangeEnvScreen.doneButton);
  }

  /** Verify done button is enable. */
  public void verifyDoneButtonIsEnable() {
    this.verifyElementIsEnable(this.loginChangeEnvScreen.doneButton);
  }

  /** Verify done button is not enable. */
  public void verifyDoneButtonIsNotEnable() {
    this.verifyElementIsNotEnable(this.loginChangeEnvScreen.doneButton);
  }

  /** Click done button. */
  public void clickDoneButton() {
    this.loginChangeEnvScreen.doneButton.click();
  }

  /** Verify environment. */
  public void verifyEnvironment() {
    this.verifyMobileElementTextViewIsVisible(this.loginChangeEnvScreen.environmentName);
  }

  /** Set code. */
  public void setEnvCode() {
    char[] codeArray = this.loginChangeEnvScreen.environmentCode.toCharArray();
    this.loginChangeEnvScreen.pinCodeInput1.click();
    this.loginChangeEnvScreen.pinCodeInput1.sendKeys(String.valueOf(codeArray[0]));
    this.loginChangeEnvScreen.pinCodeInput2.click();
    this.loginChangeEnvScreen.pinCodeInput2.sendKeys(String.valueOf(codeArray[1]));
    this.loginChangeEnvScreen.pinCodeInput3.click();
    this.loginChangeEnvScreen.pinCodeInput3.sendKeys(String.valueOf(codeArray[2]));
    this.loginChangeEnvScreen.pinCodeInput4.click();
    this.loginChangeEnvScreen.pinCodeInput4.sendKeys(String.valueOf(codeArray[3]));
    this.verifyMobileElementTextViewIsVisible(this.loginChangeEnvScreen.environmentName);
    this.clickMobileElementTextView(this.loginChangeEnvScreen.environmentName);
    this.verifyElementText(this.loginChangeEnvScreen.envText, "ENVIRONMENT: UA9");
  }

}
