@Android
Feature: Left menu

  Scenario: Verify left menu screen components
    # Login
    Given I login with "USER1" credentials
    # Select dealership
    Then I select 'Dealership'
    # Verify left menu screen
    Then I verify 'Btn main menu' Button
    Then I click 'Btn main menu' Button
    Then I verify 'User name' text
    Then I verify 'User initials' text
    Then I verify 'Dealership' text
    # Verify workbook screen
    Then I verify 'Workbook' left menu button
    Then I click 'Workbook' left menu button
    Then I verify 'Workbook' title text
    Then I verify 'Btn main menu' Button
    Then I verify 'Btn barcode walk in appt' Button
    Then I verify 'Btn add walk in appt' Button
    Then I verify 'Previous date arrow' Button
    Then I verify 'Forward date arrow' Button
    Then I verify 'Advisor filter' Dropdown
    Then I verify 'Status' Dropdown
    Then I verify 'Needs action' Button
    Then I verify 'Btn main menu' Button
    Then I click 'Btn main menu' Button
    # Verify search screen
    Then I verify 'Search appointment' left menu button
    Then I click 'Search appointment' left menu button
    Then I verify 'Search title' text
    Then I verify 'Search appointments' input
    Then I verify 'Add customer' button
    Then I click 'Add customer' button
    Then I verify 'Add customer/vehicle title' text
    Then I verify 'Customer information' text
    Then I verify 'Btn search back' button
    Then I click 'Btn search back' button
    Then I click 'Btn main menu' Button
    # Verify customer messages screen
    Then I verify 'Customer messages' left menu button
    Then I click 'Customer messages' left menu button
    Then I verify 'Customer messages title' text
    Then I verify 'Search messages' input
    Then I verify 'Search customer' button
    Then I verify 'Scan vin' button
    Then I click 'Btn main menu' Button
    # Verify release notes screen
    Then I verify 'Release notes' left menu button
    Then I click 'Release notes' left menu button
    Then I verify 'Release notes' title text
    Then I verify 'Version history' text
    Then I click 'Btn main menu' Button
    # Verify switch dealership screen
    Then I verify 'Switch dealership' button
    Then I click 'Switch dealership' button
