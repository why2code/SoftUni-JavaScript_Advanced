const { lookupChar } = require("../lookupChar");
const { assert } = require("chai");

describe("Validating incorrect input provided to func", () => {

    it("Invalid input provided for first param", () => {
        assert.equal(lookupChar(false, 5), undefined);
        assert.equal(lookupChar(6, 5), undefined);
        assert.equal(lookupChar({}, 5), undefined);
        assert.equal(lookupChar([], 5), undefined);

    });

    it("Invalid input provided for second param", () => {
        assert.equal(lookupChar("false", 3.3), undefined);
        assert.equal(lookupChar("false", false), undefined);
        assert.equal(lookupChar("Ivan", "gosho"), undefined);
        assert.equal(lookupChar("Ivan", '5'), undefined);
        assert.equal(lookupChar("Peshi", {}), undefined);
        assert.equal(lookupChar("Peshi", []), undefined);

    });
});

describe("Validating incorrect indexes provided to func", () => {

    it("Invalid index input provided for second param", () => {
        assert.equal(lookupChar("Ivan", 5), "Incorrect index");
        assert.equal(lookupChar("Ivan", -1), "Incorrect index");
        assert.equal(lookupChar("Ivan", 4), "Incorrect index");
       
    });
});

describe("Validating function returns correct char with valid inputs provided to func", () => {

    it("Valid index and input string provided return the correct char", () => {
        assert.equal(lookupChar("Ivan", 2), "a");
        assert.equal(lookupChar("Ivan", 0), "I");
        assert.equal(lookupChar("Ivan", 3), "n");

      });
});