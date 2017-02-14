const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const FIZZ = 'fizz';
const POP = 'pop';

suite('Fizz Buss - Multiples of Three and Seven Return Fizz Pop', () => {
    test('21 - buzz', () => {
        const result = fizzBuzz(21);
        assert.equal(result, FIZZ+' '+POP);
    });

    test('63 - buzz', () => {
        const result = fizzBuzz(63);
        assert.equal(result, FIZZ+' '+POP);
    });

    test( '126 - buzz', () => {
        const result = fizzBuzz(126);
        assert.equal(result, FIZZ+' '+POP);
    })
});
