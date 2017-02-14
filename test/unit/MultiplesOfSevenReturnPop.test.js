const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const POP = 'pop';

suite('Fizz Buss - Multiples of Seven Return Pop', () => {
    test('7 - buzz', () => {
        const result = fizzBuzz(7);
        assert.equal(result, POP);
    });

    test('28 - buzz', () => {
        const result = fizzBuzz(28);
        assert.equal(result, POP);
    });

    test( '77 - buzz', () => {
        const result = fizzBuzz(77);
        assert.equal(result, POP);
    })
});
