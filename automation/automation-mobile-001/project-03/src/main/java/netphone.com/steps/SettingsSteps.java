package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.SettingsActions;

/**
 * Steps.
 */
public class SettingsSteps {

  private final SettingsActions settingsActions;

  /**
   * Constructor.
   */
  public SettingsSteps() {
    this.settingsActions = new SettingsActions();
  }

  /**
   * Click on button.
   */
  @Then("^I go to 'Profile Settings' screen$")
  public void clickProfileSettingsButton() {
    this.settingsActions.clickProfileSettingsButton();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Settings' text is visible$")
  public void verifySettingsText() {
    this.settingsActions.verifySettingsText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Profile image' text is visible$")
  public void verifyProfileImageText() {
    this.settingsActions.verifyProfileImageText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'User name' text is visible$")
  public void verifyUserNameText() {
    this.settingsActions.verifyUsernameText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'User mail' text is visible$")
  public void verifyUserMailText() {
    this.settingsActions.verifyUserMailText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'User ext' text is visible$")
  public void verifyUserExtText() {
    this.settingsActions.verifyUserExtText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'General' text is visible$")
  public void verifyGeneralText() {
    this.settingsActions.verifyGeneralText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Time zone' text is visible$")
  public void verifyTimeZoneText() {
    this.settingsActions.verifyTimeZoneText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Zone' text is visible$")
  public void verifyTimeZoneESTText() {
    this.settingsActions.verifyZoneText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Call forwarding' text is visible$")
  public void verifyCallForwardingText() {
    this.settingsActions.verifyCallForwardingText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Call forwarding off' text is visible$")
  public void verifyCallForwardingOffText() {
    this.settingsActions.verifyCallForwardingOffText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Caller id' text is visible$")
  public void verifyCallerIdText() {
    this.settingsActions.verifyCallerIdText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Caller id number' text is visible$")
  public void verifyCallerIdNumberText() {
    this.settingsActions.verifyCallerIdNumberText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Device settings' text is visible$")
  public void verifyDeviceSettingsText() {
    this.settingsActions.verifyDeviceSettingsText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Silent mode' text is visible$")
  public void verifySilentModeText() {
    this.settingsActions.verifySilentModeText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Silent mode under' text is visible$")
  public void verifySilentModeUnderText() {
    this.settingsActions.verifySilentModeUnderText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Minutes mode' text is visible$")
  public void verifyMinutesModeText() {
    this.settingsActions.verifyMinutesModeText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Minutes mode under' text is visible$")
  public void verifyMinutesModeUnderText() {
    this.settingsActions.verifyMinutesModeUnderText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Legal' text is visible$")
  public void verifyLegalText() {
    this.settingsActions.verifyLegalText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Privacy policy' text is visible$")
  public void verifyPrivacyPolicyText() {
    this.settingsActions.verifyPrivacyPolicyText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Terms of service' text is visible$")
  public void verifyTermsOfServiceText() {
    this.settingsActions.verifyTermsOfServiceText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Application' text is visible$")
  public void verifyApplicationText() {
    this.settingsActions.verifyApplicationText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Integrations' text is visible$")
  public void verifyIntegrationsText() {
    this.settingsActions.verifyIntegrationsText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Advanced log reporting' text is visible$")
  public void verifyAdvancedLogReportingText() {
    this.settingsActions.verifyAdvancedLogReportingText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Logout' text is visible$")
  public void verifyLogoutText() {
    this.settingsActions.verifyLogoutText();
  }

  /**
   * Click on button.
   */
  @Then("^I click 'Exit' button$")
  public void clickExitButton() {
    this.settingsActions.clickExitButton();
  }

  /**
   * Click on button.
   */
  @Then("^I click 'Logout' button$")
  public void clickLogoutButton() {
    this.settingsActions.clickLogoutButton();
  }

  @Then("^I scrolling 'Down'$")
  public void scrollingDown() {
    this.settingsActions.scroll(0.8F, 0.2F);
  }

  @Then("^I scrolling 'Up'$")
  public void scrollingUp() {
    this.settingsActions.scroll(0.2F, 0.8F);
  }

}
