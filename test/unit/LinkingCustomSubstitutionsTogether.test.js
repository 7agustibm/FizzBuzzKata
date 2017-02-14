const assert = require('chai').assert;
const fizzBuzz = require('../../fizzbuzz');

const FUZZ = 'fuzz';
const BIZZ = 'bizz';

suite('Fizz Buss - Linking Custom Substitutions Together', () => {
    const newRules = {
        order: [4, 3],
        rules: {
            4: FUZZ,
            3: BIZZ
        }
    };

    test('4 - buzz', () => {
        const result = fizzBuzz(4, newRules);
        assert.equal(result, FUZZ);
    });

    test('9 - fuzz', () => {
        const result = fizzBuzz(9, newRules);
        assert.equal(result, BIZZ);
    });

    test( '12 - fuzz bizz', () => {
        const result = fizzBuzz(12, newRules);
        assert.equal(result, FUZZ+' '+BIZZ);
    })
});
