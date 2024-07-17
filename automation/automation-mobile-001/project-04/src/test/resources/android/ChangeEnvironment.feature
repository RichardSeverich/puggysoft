# @Android
Feature: ChangeEnvironment

  Scenario: Verify change environment
    # Verify start screen
    Given I verify 'Xtime logo' image
    Then I hold touch 'Xtime logo' image
    # Verify change env screen
    Given I verify 'Input to set env code'
    Then I verify 'Back' Button
    Then I set 'Env code'
