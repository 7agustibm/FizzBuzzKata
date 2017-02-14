const FIZZ = 'fizz';
const BUZZ = 'buzz';
const POP = 'pop';

const genericRules = {
    3: FIZZ,
    5: BUZZ,
    7: POP
};

function FizzBuzz(number, newRules){
    const rules = getRules(newRules);
    const order = getOrder(newRules);
    const result = [];

    order.forEach( divisor => {
        if(number%divisor === 0){
            result.push(rules[divisor]);
        }
    });

    if(result.length === 0){
        return number;
    }
    return result.join(' ');
}

function getRules(newRules) {
    if (newRules) {
        return newRules.rules;
    } else {
        return genericRules;
    }
}

function getOrder(newRules) {
    return newRules ? newRules.order : Object.keys(genericRules);
}

module.exports = FizzBuzz;