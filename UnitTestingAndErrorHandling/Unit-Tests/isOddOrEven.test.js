const {isOddOrEven} = require("../isOddOrEven");
const {assert} = require("chai");

describe("Validation tests for isOddOrEven - verifying incorrect types provided to the function", ()=>{
    it("Should return undefined when non-string input provided to func", ()=>{
        assert.equal(isOddOrEven(5), undefined);
        assert.equal(isOddOrEven(true), undefined);
        assert.equal(isOddOrEven([]), undefined);
        assert.equal(isOddOrEven({}), undefined);
    });

});

describe("Providing correct string input should return correctly odd or even result", ()=>{
    it("Validation with odd strings", ()=>{
        assert.equal(isOddOrEven("Ivana"), "odd");
        assert.equal(isOddOrEven("Denim"), "odd");
        assert.equal(isOddOrEven("a"), "odd");


      
    });

    it("Validation with even strings", ()=>{
        assert.equal(isOddOrEven("Koce"), "even");
        assert.equal(isOddOrEven("Deni"), "even");
        assert.equal(isOddOrEven(""), "even");
      
    });

});