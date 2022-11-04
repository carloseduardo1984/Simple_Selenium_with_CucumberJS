Feature: Search

    Scenario: Search any

    Given I visit publicazo homepage
    When I search for teste
    Then I should see the results