@SmokeTest
Feature: Login
  Scenario: Verify user is able to login
    Given I login with "ADMIN" credentials
    Then I verify 'Home' text is visible
    Then I verify 'Calls' text is visible
    Then I verify 'Messenger' text is visible
    Then I verify 'Meetings' text is visible
    Then I verify 'Contacts' text is visible
    Then I close session
