Feature: Playing FizzBuzz Variations
  Scenario Template: Multiples of Seven Return Pop
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result |
      |    7   |  pop   |
      |   28   |  pop   |
      |   77   |  pop   |

  Scenario Template: Multiples of Three and Seven Return Fizz Pop
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result     |
      |   21   |  fizz pop  |
      |   63   |  fizz pop  |
      |  126   |  fizz pop  |

  Scenario Template: Multiples of Five and Seven Return Buzz Pop
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result     |
      |   35   |  buzz pop  |
      |   70   |  buzz pop  |
      |  140   |  buzz pop  |

  Scenario Template: Multiples of Three, Five and Seven Return Fizz Buzz Pop
    Given I have started the game
    When I enter <number>
    Then <result> is returned
    Examples:
      | number | result          |
      |  105   |  fizz buzz pop  |
      |  210   |  fizz buzz pop  |
      |  315   |  fizz buzz pop  |