@navigation
Feature: Navigating to processes

    
    Background: User is logged in
        Given the user visits the application login page
        When the user logs in with valid credentials
        Then the user is on the home page

    
    Scenario: User can search for and find processes in the navigation menu
        Then the user can find each process in the navigation menu

            | Process Name       |
            | Documents          |
            | Gauge Calibrations |
            | Non-Conformances   |