Feature: Login to application

  Background: 
    Given the user vists the application login page  

  Scenario: User can login with valid credentials    
    When the user logs in with "valid" credentials    
    Then the user should be on the home page
    

  Scenario: Login to application with invalid credentials    
    When the user logs in with "invalid" credentials
    Then the user should remain on the login page
    Then the user should see an error message