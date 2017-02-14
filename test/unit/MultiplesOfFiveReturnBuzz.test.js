const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const BUZZ = 'buzz';

suite('Fizz Buss - Multiples of Five Return Buzz', () => {
        test(' 5 - buzz', () => {
            const result = fizzBuzz(5);
            assert.equal(result, BUZZ);
        });

        test(' 20 - buzz', () => {
            const result = fizzBuzz(20);
            assert.equal(result, BUZZ);
        });

        test( '200 - buzz', () => {
            const result = fizzBuzz(200);
            assert.equal(result, BUZZ);
        })
    });
