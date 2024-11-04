@Android
Feature: Home workbook

  Scenario: Verify home workbook screen components
    # Login
    Given I login with "USER1" credentials
    # Select dealership
    Then I select 'Dealership'
    # Verify left menu buttons
    # Verify workbook screen
    Then I verify 'Workbook' Button
    Then I verify 'Workbook' title text
    Then I verify 'Btn main menu' Button
    Then I verify 'Btn barcode walk in appt' Button
    Then I verify 'Previous date arrow' Button
    Then I verify 'Forward date arrow' Button
    Then I verify 'Advisor filter' Dropdown
    Then I verify 'Status' Dropdown
    Then I verify 'Needs action' Button
    Then I verify 'Btn add walk in appt' Button
    Then I click 'Btn add walk in appt' Button
    # Verify add walk in appointment screen
    Then I verify 'Add walk in appointment' title text
    Then I verify 'Search customer vehicle' input
    Then I verify 'Add customer' button
    Then I click 'Add customer' button
    Then I verify 'Add customer/vehicle title' text
    Then I verify 'Customer information' text
    Then I verify 'Btn search back' button
    Then I click 'Btn search back' button
    Then I verify 'Add walk in appointment' title text
    # Change to workbook screen
    Then I click 'Workbook' Button
    Then I verify 'Workbook' title text
    # Verify search screen
    Then I verify 'Search appointment' Button
    Then I click 'Search appointment' Button
    Then I verify 'Search title' text
    Then I verify 'Search appointments' input
    Then I verify 'Add customer' button
    Then I click 'Add customer' button
    Then I verify 'Add customer/vehicle title' text
    Then I verify 'Customer information' text
    Then I verify 'Btn search back' button
    Then I click 'Btn search back' button
    # Verify customer messages screen
    Then I verify 'Customer messages' Button
    Then I click 'Customer messages' Button
    Then I verify 'Customer messages title' text
    Then I verify 'Search messages' input
    Then I verify 'Search customer' button
    Then I verify 'Scan vin' button
    # Verify release notes screen
    Then I verify 'Release notes' Button
    Then I click 'Release notes' Button
    Then I verify 'Release notes' title text
    Then I verify 'Version history' text
