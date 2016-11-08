Feature: Sample Test

  Scenario: Login form
    Given I am on the login page
    When I enter "test@test.com" in "username" field
    And I enter "test.test" in "password" field
    And I click on the "Clear" button
    Then I should see empty inputs
