Feature: Basic Fizz Buzz Scoring

  Scenario Template: Normal Numbers Return Same Number
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result |
      |    1   |   1    |
      |    2   |   2    |
      |    4   |   4    |

  Scenario Template: Multiples of Three Return Fizz
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result |
      |    3   |  fizz  |
      |    9   |  fizz  |
      |  123   |  fizz  |

  Scenario Template: Multiples of Five Return Buzz
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result |
      |    5   |  buzz  |
      |   20   |  buzz  |
      |  200   |  buzz  |

  Scenario Template: Multiples of Three and Five Return Fizz Buzz
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result      |
      |   15   |  fizz buzz  |
      |   45   |  fizz buzz  |
      |  315   |  fizz buzz  |