@Android
Feature: Login

  Scenario: Verify login screen components
    # Verify login screen part 1
    Given I verify 'Xtime logo' image
    Then I verify 'Sign in' Button
    Then I verify 'Sign in options' Button
    Then I click 'Sign in' Button
    # Verify login screen part 2 username
    Then I verify 'Xtime logo' text
     # Then I verify 'Cox Automotive' text
    Then I verify 'Sign in Xtime' text
    Then I verify 'Username' label
    Then I verify 'Username' input
    Then I verify 'Forgot' text
    Then I verify 'Forgot username' button
    Then I verify 'Forgot password' button
    Then I verify 'Next' is disable button
    Then I set "ant" username input
    Then I verify 'Next' is enable button
    Then I click 'Next' button
    # Verify login screen part 3 password
    Given I verify 'Return' button
    Then I verify 'Password' label
    Then I verify 'Show password' button
    Then I verify 'Password' input
    Then I verify 'Forgot password' screen3 button
    Then I verify 'Sign in' screen3 button
    Then I verify 'Sign in' screen3 is disable button
    # NEEDS SCROLL
    # Then I verify 'Contact us' button
    # Then I verify 'Terms of use' button
    # Then I verify 'All rights reserved' text
    # Then I verify 'Privacy statement' button
    Then I set "invalid123" password input
    Then I verify 'Sign in' screen3 is enable button
    Then I click 'Sign in' screen3 button
    Then I verify 'Sign in Xtime' text
    Then I verify 'Cancel' button
    Then I click 'Cancel' button
    Given I verify 'Xtime logo' image
