@Android
Feature: CheckIn

  Scenario: Verify Check-in screen components
    # Login
    Given I login with "USER1" credentials
    # Select dealership
    Then I select 'Dealership'
    # Verify workbook screen
    Then I verify 'Workbook' title text
    # Verify search appointment screen
    Then I verify 'Search appointment' Button
    Then I click 'Search appointment' Button
    Then I verify 'Search title' text
    Then I set customer 'Search appointments' input
    Then I verify 'Search additional days and customer info' Button
    Then I click 'Search additional days and customer info' Button
    # Verify select customer and vehicle screen
    Then I verify 'Didnt find what you where looking for' text
    Then I verify 'Search OEM customer database' button
    Then I verify 'Customer' text
    Then I verify 'Customer name' text
    Then I verify 'Edit customer' button
    Then I verify 'Add vehicle to customer' Button
    Then I verify 'Vehicle name' text
    Then I verify 'Check in' Button
    Then I click 'Check in' Button
    # Verify Check-in screen
    Then I verify 'Check in title' text
    Then I verify 'Customer name and vehicle name' text
    Then I verify 'Workbook arrow back' button
    Then I verify 'Btn right menu' button
    Then I verify 'Appointment and vehicle' text
    Then I verify 'Current mileage' label
    Then I verify 'Current mileage' input
    Then I verify 'Edit vehicle information' button
    # Verify right buttons
    Then I verify 'Check in' button
    Then I verify 'Walk around' button
    Then I verify 'Symptom survey' button
    Then I verify 'Services' button
    Then I verify 'Estimate' button
    Then I verify 'Documents and payment' button
    Then I verify 'Customer information' button
    Then I verify 'Vehicle information' button
    Then I verify 'Alert and notes' button
    # Verify right buttons status
    Then I verify 'Check in' is enabled button
    Then I verify 'Walk around' is disabled button
    Then I verify 'Symptom survey' is disabled button
    Then I verify 'Services' is disabled button
    Then I verify 'Estimate' is disabled button
    Then I verify 'Documents and payment' is disabled button
    # Set mileage input
    Then I set "50000" 'Current mileage' input
    # Verify right buttons status changed
    Then I verify 'Walk around' is enabled button
    Then I verify 'Symptom survey' is enabled button
    Then I verify 'Services' is enabled button
    Then I verify 'Estimate' is enabled button
    Then I verify 'Documents and payment' is disabled button
    # Verify walk around screen
    Then I click 'Walk around' button
    Given I verify 'Walk around' title text
    Then I verify 'Marc as no damage' button
    Then I verify 'Car drawing' image
    # NEEDS SCROLL
    # Then I verify 'Body damage' option
    # Then I click 'Body damage' option
    # Then I verify body damage 'Select condition' dropdown
    # Then I verify body damage 'Now' button
    # Then I verify body damage 'Later' button
    # Then I verify body damage 'Never' button
    # Then I verify 'Conditions affecting all tires' option
    # Then I click 'Conditions affecting all tires' option
    # Then I verify conditions affecting all tires 'Good' button
    # Then I verify conditions affecting all tires 'Fair' button
    # Then I verify conditions affecting all tires 'Poor' button
    # Then I verify conditions affecting all tires 'Select condition' dropdown
    # Then I verify conditions affecting all tires 'Now' button
    # Then I verify conditions affecting all tires 'Later' button
    # Then I verify conditions affecting all tires 'Never' button
    # Then I verify conditions affecting all tires 'Rotate tires' text
    # Then I verify conditions affecting all tires 'Rotate tires' checkBox
    # Then I click conditions affecting all tires 'Rotate tires' checkBox
    # Verify symptom survey screen
    Then I click 'Symptom survey' button
    Given I verify 'Symptom survey' title text
    Then I verify 'Symptom survey' sub title text
    # Verify services screen
    Then I click 'Services' button
    Given I verify 'Services' title text
    Then I verify 'Package' tab
    Then I verify 'Services' tab
    Then I verify 'Tires' tab
    Then I verify 'Promotions' tab
    Then I verify 'Review estimate' button
    # Verify services screen services tab
    Then I click 'Services' tab
    Then I verify services tab 'Spyder oil change' text
    Then I verify services tab 'Spyder oil change' checkbox
    Then I click services tab 'Spyder oil change' checkbox
    # Verify estimate screen
    Then I click 'Estimate' button
    Then I verify 'Estimate' title text
    # Verify estimate screen step 1
    Then I verify 'Review services and estimate' text
    Then I verify service selected 'Spyder oil change' text
    Then I verify 'Approve estimate' button
    Then I click 'Approve estimate' button
    # Verify estimate screen step 2
    Then I verify 'Review customer information' text
    Then I verify 'Owner contact info' text
    Then I verify 'Customer email' label
    Then I verify 'Customer email' input
    Then I verify 'Customer email' value text
    Then I verify 'Customer home phone' label
    Then I verify 'Customer home phone' input
    Then I verify 'Customer home phone' value text
    # NEEDS SCROLL
    # Then I verify 'Owner address' text
    # Then I verify 'Customer first name' label
    # Then I verify 'Customer first name' input
    # Then I verify 'Customer first name' value text
    # Then I verify 'Customer last name' label
    # Then I verify 'Customer last name' input
    # Then I verify 'Customer last name' value text
    Then I verify 'Back' button
    Then I verify 'Looks good' button
    Then I click 'Looks good' button
    # Verify estimate screen step 3
    Then I verify 'Double check and sign' text
    Then I verify 'Contact information' text
    Then I verify 'Customer email' text
    Then I verify 'Personal information' text
    Then I verify 'Customer full name' text
    # NEEDS SIGN
    # Then I verify 'Documents and payment' is enabled button
    # Then I click 'Documents and payment' button
