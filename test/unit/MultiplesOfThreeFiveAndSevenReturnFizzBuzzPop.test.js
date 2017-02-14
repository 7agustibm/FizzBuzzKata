const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const BUZZ = 'buzz';
const FIZZ = 'fizz';
const POP = 'pop';

suite('Fizz Buss - Multiples of Three, Five and Seven Return Fizz Buzz Pop', () => {
    test('105 - buzz', () => {
        const result = fizzBuzz(105);
        assert.equal(result, FIZZ+' '+BUZZ+' '+POP);
    });

    test('210 - buzz', () => {
        const result = fizzBuzz(210);
        assert.equal(result, FIZZ+' '+BUZZ+' '+POP);
    });

    test( '315 - buzz', () => {
        const result = fizzBuzz(315);
        assert.equal(result, FIZZ+' '+BUZZ+' '+POP);
    })
});
