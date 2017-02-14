'use strict';
const FizzBuzz = require('../../../fizzbuzz');
const expect = require('chai').expect;

const myStepDefinitionsWrapper = function () {
    let result;
    let newRules = {};
    this.Given(/^I have started the game$/, function (callback) {
        newRules = undefined;
        callback();
    });

    this.When(/^I enter (.*)$/, function (number,callback) {
       result = FizzBuzz(number, newRules);
       console.log(result);
       callback();
    });

    this.Then(/^(.*) is returned$/, function (expected, callback) {
        expect(result).to.contain(expected);
        callback();
    });

    this.Given(/^I have substituted multiples of two for 'fuzz'$/, function (callback) {
        newRules = {
            order: [ 2 ],
            rules: {
                2: 'fuzz'
            }
        };
        callback();
    });

    this.Given(/^I have substituted multiples of three for 'bizz'$/, function (callback) {
        newRules.rules['3'] = 'bizz';
        newRules.order.push(3);
        callback();
    });

};
module.exports = myStepDefinitionsWrapper;