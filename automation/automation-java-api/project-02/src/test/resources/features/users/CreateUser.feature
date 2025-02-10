@SmokeTest
Feature: Users API
  Scenario: Verify that a user can be created
    # Test 1: Post user.
    When a "POST" request to "/users" with
      | username       | automation_user               |
      | password       | automation_user_pass          |
      | dni            | 7777777777                    |
      | name           | Isaac                         |
      | secondName     | None                          |
      | lastName       | Newton                        |
      | secondLastName | None                          |
      | birthDate      | 1642-07-07                    |
      | age            | 100                           |
      | sex            | MALE                          |
      | occupation     | Ing. Automation               |
      | telephone      | 7777777                       |
      | address        | Av. Automation 7              |
      | email          | automation_user@puggysoft.com |
      | active         | true                          |
      | emailVerified  | true                          |
    Then response status code should be 201
    And stored resource as [User]

  Scenario: Verify that a user can be obtained
    When a "GET" request to "/users/[User.id]"
    Then response status code should be 200
    Then response body has a field "username" with "automation_user"
    Then response body has a field "password" with "automation_user_pass"
    Then response body has a field "dni" with "7777777777"
    Then response body has a field "name" with "Isaac"
    Then response body has a field "secondName" with "None"
    Then response body has a field "lastName" with "Newton"
    Then response body has a field "secondLastName" with "None"
    Then response body has a field "birthDate" with "1642-07-07"
    Then response body has a field "age" with "100"
    Then response body has a field "sex" with "MALE"
    Then response body has a field "occupation" with "Ing. Automation"
    Then response body has a field "telephone" with "7777777"
    Then response body has a field "address" with "Av. Automation 7"
    Then response body has a field "email" with "automation_user@puggysoft.com"
    Then response body has a field "active" with "true"
    Then response body has a field "emailVerified" with "true"

  Scenario: Verify that a user can be edited
    When a "PUT" request to "/users/[User.id]" with
      | username       | automation_user               |
      | password       | secret123                     |
      | dni            | 9999999999                    |
      | name           | Nikola                        |
      | secondName     | Louis                         |
      | lastName       | Tesla                         |
      | secondLastName | Curie                         |
      | birthDate      | 1994-07-07                    |
      | age            | 30                            |
      | sex            | MALE                          |
      | occupation     | Ing. Sistemas                 |
      | telephone      | 9999991                       |
      | address        | Av. Automation 9              |
      | email          | automation_user@puggysoft.com |
      | active         | false                         |
      | emailVerified  | false                         |
    Then response status code should be 200
    When a "GET" request to "/users/[User.id]"
    Then response status code should be 200
    Then response status code should be 200
    Then response body has a field "username" with "automation_user"
    Then response body has a field "password" with "secret123"
    Then response body has a field "dni" with "9999999999"
    Then response body has a field "name" with "Nikola"
    Then response body has a field "secondName" with "Louis"
    Then response body has a field "lastName" with "Tesla"
    Then response body has a field "secondLastName" with "Curie"
    Then response body has a field "birthDate" with "1994-07-07"
    Then response body has a field "age" with "30"
    Then response body has a field "sex" with "MALE"
    Then response body has a field "occupation" with "Ing. Sistemas"
    Then response body has a field "telephone" with "9999991"
    Then response body has a field "address" with "Av. Automation 9"
    Then response body has a field "email" with "automation_user@puggysoft.com"
    Then response body has a field "active" with "false"
    Then response body has a field "emailVerified" with "false"

  Scenario: Verify that a user can be deleted
    When a "DELETE" request to "/users/[User.id]"
    Then response status code should be 200
