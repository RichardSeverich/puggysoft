@Android
Feature: Logout

  Scenario: Verify logout screen components
    # Login with USER1 credentials
    Given I login with "USER1" credentials
    # Verify select dealership screen
    Then I select 'Dealership'
    # Verify Workbook screen
    Then I verify 'Workbook' title text
    Then I verify 'Btn main menu' Button
    Then I click 'Btn main menu' Button
    # Verify left menu screen
    Then I verify 'User name' text
    Then I verify 'Sign out' button
    Then I click 'Sign out' Button
    # Verify sign out alert
    Then I verify 'Are you sure' alert text
    Then I verify 'Sign out' alert button
    Then I click 'Sign out' alert Button
    # Verify start screen
    Given I verify 'Xtime logo' image
