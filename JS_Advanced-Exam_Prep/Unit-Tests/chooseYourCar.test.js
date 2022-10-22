const { chooseYourCar } = require("../03. Choose Your Car/chooseYourCar");
const { assert } = require("chai");

//["BMW", "Toyota", "Kia"]
describe("Tests for chooseYourCar func", function () {

    describe("Testing choosingType method with invalid year parameter", () => {
        it("choosingType invalid year parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "blue", 1899) }, "Invalid Year!")
        });
        it("choosingType invalid year parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "blue", 2023) }, "Invalid Year!")
        });
        it("choosingType invalid year parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "blue", 0) }, "Invalid Year!")
        });
        it("choosingType invalid year parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "blue", -5) }, "Invalid Year!")
        });
    });

    describe("Testing choosingType method with invalid type parameter", () => {
        it("choosingType invalid type parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("Combi", "blue", 2010) }, "This type of car is not what you are looking for.")
        });
        it("choosingType invalid type parameter", () => {
            assert.throw(() => { chooseYourCar.choosingType("SUV", "blue", 2002) }, "This type of car is not what you are looking for.")
        });
    });

    describe("Testing choosingType method with VALId type but >= 2010 year parameter", () => {
        it("choosingType invalid year parameter", () => {
            let res = chooseYourCar.choosingType("Sedan", "blue", 2010);
            assert.equal(res, `This blue Sedan meets the requirements, that you have.`)
        });

        it("choosingType invalid year parameter", () => {
            let res = chooseYourCar.choosingType("Sedan", "pink", 2015);
            assert.equal(res, `This pink Sedan meets the requirements, that you have.`)
        });
        it("choosingType invalid year parameter", () => {
            let res = chooseYourCar.choosingType("Sedan", "pink", 2022);
            assert.equal(res, `This pink Sedan meets the requirements, that you have.`)
        });
    });

    describe("Testing choosingType method with VALId type AND < 2010 year parameter", () => {
        it("choosingType invalid year parameter", () => {
            let res = chooseYourCar.choosingType("Sedan", "blue", 2009);
            assert.equal(res, `This Sedan is too old for you, especially with that blue color.`)
        });

        it("choosingType invalid year parameter", () => {
            let res = chooseYourCar.choosingType("Sedan", "pink", 1900);
            assert.equal(res, `This Sedan is too old for you, especially with that pink color.`)
        });

    });


    describe("Testing brandName method", () => {
        it("brandName invalid ARRAY input", () => {
            assert.throw(() => { chooseYourCar.brandName("hi", 3) }, `Invalid Information!`);
        });
        it("brandName invalid ARRAY input", () => {
            assert.throw(() => { chooseYourCar.brandName({}, 3) }, `Invalid Information!`);
        });
        it("brandName invalid ARRAY input", () => {
            assert.throw(() => { chooseYourCar.brandName(5, 3) }, `Invalid Information!`);
        });

        it("brandName invalid INDEX input", () => {
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Toyota", "Kia"], -5) }, `Invalid Information!`);
        });
        it("brandName invalid INDEX input", () => {
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Toyota", "Kia"], 4) }, `Invalid Information!`);
        });
        it("brandName invalid INDEX input", () => {
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Toyota", "Kia"], "1") }, `Invalid Information!`);
        });
        it("brandName invalid INDEX input", () => {
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Toyota", "Kia"], []) }, `Invalid Information!`);
        });
        it("brandName invalid INDEX input", () => {
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Toyota", "Kia"], {}) }, `Invalid Information!`);
        });

    });

    describe("Testing brandName method with VALID inputs", () => {
        it("brandName valid inputs", () => {
            let res = chooseYourCar.brandName(["BMW", "Toyota", "Kia"], 1);
            assert.equal(res, "BMW, Kia")
        });

        it("brandName valid inputs", () => {
            let res = chooseYourCar.brandName(["BMW", "Toyota", "Kia"], 2);
            assert.equal(res, "BMW, Toyota")
        });
        it("brandName valid inputs", () => {
            let res = chooseYourCar.brandName(["BMW", "Toyota", "Kia"], 0);
            assert.equal(res, "Toyota, Kia")
        });
    });



    describe("Testing carFuelConsumption method", () => {
        it("Invalid distance inputs", () => {
            assert.throw(() => { chooseYourCar.carFuelConsumption("5", 3) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption({}, 3) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption([], 3) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(0, 3) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(-5, 3) }, "Invalid Information!");
        });

        it("Invalid consumption inputs", () => {
            assert.throw(() => { chooseYourCar.carFuelConsumption(4, []) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(4, {}) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(4, "4") }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(4, 0) }, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(4, -3) }, "Invalid Information!");

        });

        it("Invalid litersPerHundredKm", () => {
            let res = chooseYourCar.carFuelConsumption(50, 10);
            assert.equal(res, "The car burns too much fuel - 20.00 liters!");
        });
        it("Invalid litersPerHundredKm", () => {
            let res = chooseYourCar.carFuelConsumption(100, 8);
            assert.equal(res, "The car burns too much fuel - 8.00 liters!");
        });

        it("VALID litersPerHundredKm", () => {
            let res = chooseYourCar.carFuelConsumption(100, 7);
            assert.equal(res, "The car is efficient enough, it burns 7.00 liters/100 km.");
        });

        it("VALID litersPerHundredKm", () => {
            let res = chooseYourCar.carFuelConsumption(100, 5);
            assert.equal(res, "The car is efficient enough, it burns 5.00 liters/100 km.");
        });

    });

});
