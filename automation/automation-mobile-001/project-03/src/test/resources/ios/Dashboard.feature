@iOS
Feature: Dashboard
  Scenario: Verify dashboard screen components
    Given I login with "ADMIN" credentials
    # HOME SCREEN
    Then I verify 'Home' text is visible
    Then I verify 'Calls' text is visible
    Then I verify 'Messenger' text is visible
    Then I verify 'Meetings' text is visible
    Then I verify 'Contacts' text is visible
    Then I verify 'No activities yet' text is visible
    # CALLS SCREEN
    Then I go to 'Calls' screen
    Then I verify 'All' text is visible
    Then I verify 'Missed' text is visible
    Then I verify 'Voicemails' text is visible
    Then I verify 'Mine' button is visible
    Then I verify 'Company' button is visible
    Then I verify 'Call history empty' text is visible
    # MESSAGES SCREEN
    Then I go to 'Messenger' screen
    Then I verify 'Start a conversation' text is visible
    Then I verify 'Start a conversation under text' text is visible
    Then I verify 'Unread' text is visible
    # MEETINGS SCREEN
    Then I go to 'Meetings' screen
    Then I verify 'Integrations meetings tab' text is visible
    Then I verify 'Integrations Under Text' text is visible
    Then I verify 'Gmail login button' text is visible
    Then I verify 'Microsoft login button' text is visible
    # CONTACTS SCREEN
    Then I go to 'Contacts' screen
    Then I verify 'Company' text is visible
    Then I verify 'Departments' text is visible
    Then I verify 'Ring Groups' text is visible
    Then I verify 'Welcome Menus' text is visible
    Then I verify 'Device' text is visible
    # SETTINGS SCREEN
    Then I go to 'Profile Settings' screen
    Then I verify 'Settings' text is visible
    Then I verify 'Profile image' text is visible
    Then I verify 'User name' text is visible
    Then I verify 'User mail' text is visible
    Then I verify 'User ext' text is visible
    Then I verify 'General' text is visible
    Then I verify 'Time zone' text is visible
    Then I verify 'Zone' text is visible
    Then I verify 'Call forwarding' text is visible
    Then I verify 'Call forwarding off' text is visible
    Then I verify 'Caller id' text is visible
    Then I verify 'Caller id number' text is visible
    Then I verify 'Device settings' text is visible
    Then I verify 'Silent mode' text is visible
    Then I verify 'Silent mode under' text is visible
    Then I verify 'Minutes mode' text is visible
    Then I verify 'Minutes mode under' text is visible
    Then I verify 'Legal' text is visible
    Then I verify 'Privacy policy' text is visible
    Then I verify 'Terms of service' text is visible
    Then I verify 'Application' text is visible
    Then I verify 'Integrations' text is visible
    # Then I scrolling 'Down
    # Then I verify 'Advanced log reporting' text is visible
    # Then I verify 'Logout' text is visible
    Then I click 'Exit' button
    Then I verify 'Home' text is visible
