const { mathEnforcer } = require("../mathEnforcer");
const { assert } = require("chai");

describe("Testing addFive functionality with incorrect and correct inputs", () => {

    it("Incorrect input provided for addFive, which is not a number", () => {
        assert.equal(mathEnforcer.addFive("5"), undefined);
        assert.equal(mathEnforcer.addFive("hi"), undefined);
        assert.equal(mathEnforcer.addFive([]), undefined);
        assert.equal(mathEnforcer.addFive({}), undefined);
        assert.equal(mathEnforcer.addFive(false), undefined);
    });

    it("Correct input provided for addFive, which should add 5 to the number provided", () => {
        assert.equal(mathEnforcer.addFive(5), 10);
        assert.equal(mathEnforcer.addFive(3.3), 8.3);
        assert.equal(mathEnforcer.addFive(0), 5);
        assert.equal(mathEnforcer.addFive(-2), 3);


    });
});

describe("Testing subtractTen functionality with incorrect and correct inputs", () => {

    it("Incorrect input provided for subtractTen, which is not a number", () => {
        assert.equal(mathEnforcer.subtractTen("5"), undefined);
        assert.equal(mathEnforcer.subtractTen("hi"), undefined);
        assert.equal(mathEnforcer.subtractTen([]), undefined);
        assert.equal(mathEnforcer.subtractTen({}), undefined);
        assert.equal(mathEnforcer.subtractTen(false), undefined);
    });

    it("Correct input provided for subtractTen, which should add 5 to the number provided", () => {
        assert.equal(mathEnforcer.subtractTen(15), 5);
        assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
        assert.equal(mathEnforcer.subtractTen(1), -9);
        assert.equal(mathEnforcer.subtractTen(-5), -15);
    });
});

describe("Testing sum functionality with incorrect and correct inputs", () => {

    it("Incorrect first input provided for sum, which is not a number", () => {
        assert.equal(mathEnforcer.sum("5", 5), undefined);
        assert.equal(mathEnforcer.sum("hi", 5), undefined);
        assert.equal(mathEnforcer.sum([], 5), undefined);
        assert.equal(mathEnforcer.sum({}, 5), undefined);
        assert.equal(mathEnforcer.sum(false, 5), undefined);
    });

    it("Incorrect second input provided for sum, which is not a number", () => {
        assert.equal(mathEnforcer.sum(5, "3"), undefined);
        assert.equal(mathEnforcer.sum(3, "hi"), undefined);
        assert.equal(mathEnforcer.sum(2, []), undefined);
        assert.equal(mathEnforcer.sum(3, {}), undefined);
        assert.equal(mathEnforcer.sum(5, false), undefined);
    });

    it("Correct input for both parameters provided for sum, which should sum the numbers provided", () => {
        assert.equal(mathEnforcer.sum(15, 5), 20);
        assert.equal(mathEnforcer.sum(10.5, 0.5), 11);
        assert.equal(mathEnforcer.sum(1, -5), -4);
        assert.equal(mathEnforcer.sum(-2, 2), 0);
        assert.equal(mathEnforcer.sum(-6, -5), -11);
    });
});

