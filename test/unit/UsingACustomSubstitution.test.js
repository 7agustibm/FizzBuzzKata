const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const FUZZ = 'fuzz';

suite('Fizz Buss - Using a Custom Substitution', () => {
    const newRules = {
        order: [ 2 ],
        rules: {
            2: FUZZ
        }
    };

    test('1 - 1', () => {
        const result = fizzBuzz(1);
        assert.equal(result, 1);
    });

    test('2 - fuzz', () => {
        const result = fizzBuzz(2, newRules);
        assert.equal(result, FUZZ);
    });

    test( '8 - buzz', () => {
        const result = fizzBuzz(8, newRules);
        assert.equal(result, FUZZ);
    })
});
