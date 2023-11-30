@SmokeTest
Feature: Login
  Scenario: Verify that a user is able to login
    Given I navigate login page
    When I login with username: "admin" and password: "admin"
    Then I navigate to Security Settings page
    Then I verify input metadata url "/sso/saml/metadata" text contains
    Then I close browser