const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const FIZZ = 'fizz';
const BUZZ = 'buzz';

suite('Fizz Buss - Multiples of Three and Five Return Fizz Buzz', () => {
       test('15 - fizz buzz', () => {
           const result = fizzBuzz(15);
           assert.equal(result, FIZZ+' '+BUZZ);
       });

        test('45 - fizz buzz', () => {
            const result = fizzBuzz(45);
            assert.equal(result, FIZZ+' '+BUZZ);
        });

        test('315 - fizz buzz', () => {
            const result = fizzBuzz(315);
            assert.include(result, FIZZ+' '+BUZZ);
        });
    });
