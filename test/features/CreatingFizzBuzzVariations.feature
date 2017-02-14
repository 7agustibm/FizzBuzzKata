Feature: Creating Fizz Buzz Variations
  Scenario Template: Using a Custom Substitution
    Given I have substituted multiples of two for 'fuzz'
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result |
      |    1   |  1     |
      |    2   |  fuzz  |
      |    8   |  fuzz  |

  Scenario Template: Linking Custom Substitutions Together
    Given I have substituted multiples of two for 'fuzz'
    And I have substituted multiples of three for 'bizz'
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result     |
      |    4   |  fuzz      |
      |    9   |  bizz      |
      |   12   |  fuzz bizz |