const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

suite('Fizz Buss - Normal Numbers Return Same Number', ()=> {
        test('1 - 1',() => {
            let number = 1;
            const result = fizzBuzz(number);
            assert.equal(result, number);
        });

        test('2 - 2',() => {
            const number = 2;
            const result = fizzBuzz(number);
            assert.equal(result, number);
        });

        test('4 - 4',() => {
            const number = 4;
            const result = fizzBuzz(number);
            assert.equal(result, number);
        });
    });
