const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const BUZZ = 'buzz';
const POP = 'pop';

suite('Fizz Buss - Multiples of Five and Seven Return Buzz Pop', () => {
    test('35 - buzz', () => {
        const result = fizzBuzz(35);
        assert.equal(result, BUZZ+' '+POP);
    });

    test('70 - buzz', () => {
        const result = fizzBuzz(70);
        assert.equal(result, BUZZ+' '+POP);
    });

    test( '140 - buzz', () => {
        const result = fizzBuzz(140);
        assert.equal(result, BUZZ+' '+POP);
    })
});
