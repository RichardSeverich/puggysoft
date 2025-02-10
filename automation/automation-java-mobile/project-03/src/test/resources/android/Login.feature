@Android
Feature: Login

  Scenario: Verify login screen components
    # Verify login screen part 1
    Given I verify Lets Get Started Button
    Then I verify 'Welcome to' text
    Then I click Lets Get Started Button
    # Verify login screen part 2
    Given I verify 'Login' text
    Then I verify 'Welcome to' text
    Then I verify 'Next' button
    Then I verify Next button is disabled
    Then I set "Ri" email
    Then I verify email error message
    Then I verify Next button is disabled
    Then I set "richard.severich@idt.net" email
    Then I verify Next button is enabled
    Then I click 'Next' button
    # Verify login screen part 3
    Then I verify 'Login' button
    Then I verify 'Welcome to' text
    Then I verify 'Forgot Password' text
    Then I verify 'Please contact your authentication provider.' text
    Then I verify Login button is disabled
    Then I set "invalid123" password
    Then I verify Login button is enabled
    Then I click 'Login' button
    Then I verify 'Password' error message

  Scenario: Verify logout
    Given I login with "ADMIN" credentials
    Then I verify 'Home' text is visible
    Then I go to 'Profile Settings' screen
    Then I click 'Logout' button
    Given I verify Lets Get Started Button
    Then I verify 'Welcome to' text
