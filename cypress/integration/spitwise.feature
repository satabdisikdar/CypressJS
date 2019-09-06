Feature: Splitwise Sign up

  I want to sign in to Splitwise
  
  @focus
  Scenario: Opening the page
    Given I open Splitwise page
    Then I see "Introduce yourself" in the title
    When I type "Sikdar" in the box

