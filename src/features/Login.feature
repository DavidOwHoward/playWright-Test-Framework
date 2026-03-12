Feature: Login to Homedev.qad.com 

  Scenario: User can login with valid credentials
    Given the user enters the application URL "https://homedev.qad.com"
    When the user enters valid credentials
    And the user clicks the "Sign In" button
    Then the user should be logged in successfully
    And the user should see the "Welcome" message at the bottom of the home page