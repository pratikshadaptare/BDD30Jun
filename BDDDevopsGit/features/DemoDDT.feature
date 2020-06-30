@FunctionalTest
Feature: Test login functionality with different set of date

  @UnitTest
  Scenario Outline: Test Login functionality
    Given User is on newtours site
    When User enters "<Username>"	and "<Password>"
    Then Display user logged in newtours successfully.

    Examples: 
      | Username  | Password  |
      | mercury   | mercury   |
      | askmail29 | askmail29 |
