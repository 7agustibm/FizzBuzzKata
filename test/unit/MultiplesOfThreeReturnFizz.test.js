const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const FIZZ = 'fizz';

suite('Fizz Buss - Multiples of Three Return Fizz', () => {
        test(' 3 - fizz', () => {
            const result = fizzBuzz(3);
            assert.equal(result, FIZZ);
        });

        test(' 9 - fizz', () => {
            const result = fizzBuzz(9);
            assert.equal(result, FIZZ);
        });

        test(' 123 - fizz', () => {
            const result = fizzBuzz(123);
            assert.equal(result, FIZZ);
        });
    });