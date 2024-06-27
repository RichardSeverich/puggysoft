package netphone.com.actions;


import netphone.com.screens.SettingsScreen;

/**
 * Settings actions.
 */
public class SettingsActions extends AbstractActions {

  public SettingsScreen settingsScreen;

  /**
   * Constructor.
   */
  public SettingsActions() {
    this.settingsScreen = new SettingsScreen();
  }

  /**
   * Click Exit settings button.
   */
  public void clickExitButton() {
    this.settingsScreen.exitSettingsButton.click();
  }

  /**
   * Verification Settings text.
   */
  public void clickProfileSettingsButton() {
    this.settingsScreen.getImageProfileText(this.settingsScreen.adminInitials).click();
  }

  /**
   * Verification Settings text.
   */
  public void verifySettingsText() {
    this.waitForDisplayed(this.settingsScreen.settingsText);
  }

  /**
   * Verification Profile image text.
   */
  public void verifyProfileImageText() {
    this.waitForDisplayed(this.settingsScreen.getImageProfileText(this.settingsScreen.adminInitials));
  }

  /**
   * Verification Username text.
   */
  public void verifyUsernameText() {
    this.waitForDisplayed(this.settingsScreen.getNameText(this.settingsScreen.adminName));
  }

  /**
   * Verification User mail text.
   */
  public void verifyUserMailText() {
    this.waitForDisplayed(this.settingsScreen.getMailText(this.settingsScreen.adminUsername));
  }

  /**
   * Verification User ext text.
   */
  public void verifyUserExtText() {
    this.waitForDisplayed(this.settingsScreen.getExtText(this.settingsScreen.adminExt));
  }

  /**
   * Verification General text.
   */
  public void verifyGeneralText() {
    this.waitForDisplayed(this.settingsScreen.generalText);
  }

  /**
   * Verification Time zone text.
   */
  public void verifyTimeZoneText() {
    this.waitForDisplayed(this.settingsScreen.timeZoneText);
  }

  /**
   * Verification Time zone EST text.
   */
  public void verifyZoneText() {
    this.waitForDisplayed(this.settingsScreen.getZoneText(this.settingsScreen.adminZone));
  }

  /**
   * Verification Call forwarding text.
   */
  public void verifyCallForwardingText() {
    this.waitForDisplayed(this.settingsScreen.callForwardingText);
  }

  /**
   * Verification Call forwarding off text.
   */
  public void verifyCallForwardingOffText() {
    this.waitForDisplayed(this.settingsScreen.callForwardingOffText);
  }

  /**
   * Verification Caller id text.
   */
  public void verifyCallerIdText() {
    this.waitForDisplayed(this.settingsScreen.callerIdText);
  }

  /**
   * Verification Caller id number text.
   */
  public void verifyCallerIdNumberText() {
    this.waitForDisplayed(this.settingsScreen.getCallerIdNumberText(this.settingsScreen.adminCallerIdNumber));
  }

  /**
   * Verification Device settings text.
   */
  public void verifyDeviceSettingsText() {
    this.waitForDisplayed(this.settingsScreen.deviceSettingsText);
  }

  /**
   * Verification Silent mode text.
   */
  public void verifySilentModeText() {
    this.waitForDisplayed(this.settingsScreen.silentModeText);
  }

  /**
   * Verification Silent mode under text.
   */
  public void verifySilentModeUnderText() {
    this.waitForDisplayed(this.settingsScreen.silentModeUnderText);
  }

  /**
   * Verification Minutes mode text.
   */
  public void verifyMinutesModeText() {
    this.waitForDisplayed(this.settingsScreen.minutesModeText);
  }

  /**
   * Verification Minutes mode under text.
   */
  public void verifyMinutesModeUnderText() {
    this.waitForDisplayed(this.settingsScreen.minutesModeUnderText);
  }

  /**
   * Verification Legal text.
   */
  public void verifyLegalText() {
    this.waitForDisplayed(this.settingsScreen.legalText);
  }

  /**
   * Verification Privacy policy text.
   */
  public void verifyPrivacyPolicyText() {
    this.waitForDisplayed(this.settingsScreen.privacyPolicyText);
  }

  /**
   * Verification Terms of service text.
   */
  public void verifyTermsOfServiceText() {
    this.waitForDisplayed(this.settingsScreen.termsOfServiceText);
  }


  /**
   * Verification Application text.
   */
  public void verifyApplicationText() {
    this.waitForDisplayed(this.settingsScreen.applicationText);
  }

  /**
   * Verification Integrations text.
   */
  public void verifyIntegrationsText() {
    this.waitForDisplayed(this.settingsScreen.integrationsText);
  }

  /**
   * Verification Advanced log reporting text.
   */
  public void verifyAdvancedLogReportingText() {
    this.waitForDisplayed(this.settingsScreen.advancedLogReporting);
  }

  /**
   * Verification Logout text.
   */
  public void verifyLogoutText() {
    this.waitForDisplayed(this.settingsScreen.logOutButton);
  }

  /**
   * Click Logout button.
   */
  public void clickLogoutButton() {
    this.settingsScreen.logOutButton.click();
  }
}
