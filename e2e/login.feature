Feature: Login to Sauce Demo website
  As a Swag Labs Customer who is not locked out
  I need to be able to log in
  So that I can purchase Sauce Labs products

  Scenario: Successful Login
    Given I am on Sauce Demo Login Page
    When I fill the account information for account standard_user
    And I click Login Button
    Then I am redirected to the Sauce Demo Main Page
    And I verify the app logo is visible

  Scenario: Failed Login
    Given I am on Sauce Demo Login Page
    When I fill the account information for account locked_out_user
    And I click Login Button
    Then I verify the error message to contain the text "Sorry, this user has been banned."