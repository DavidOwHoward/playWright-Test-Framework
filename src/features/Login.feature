@login
Feature: Login to application

  Background: 
    Given the user vists the application login page  

  Scenario: User can login with valid credentials    
    When the user logs in with "valid" credentials    
    Then the user should be on the home page
    

  Scenario Outline: User attempts to login with an invalid credentials
    When the user logs in with '<credentialsType>' credentials
    Then the user should remain on the login page
    And the user should see an error message

    Examples:
      | credentialsType     |
      | passwordInvalid     |
      | usernameInvalid     |
    