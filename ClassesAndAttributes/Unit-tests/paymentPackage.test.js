const { PaymentPackage } = require("../paymentPackage");
const { assert } = require("chai");

describe("Validating constructor and property setters with valid parameters", () => {

    it("Creating instance with correct params should produce instance of the object", () => {
        let pack = new PaymentPackage("Ivan", 200);
        assert.equal(pack.name, "Ivan");
        assert.equal(pack.value, 200);
        assert.equal(pack.VAT, 20);
        assert.equal(pack.active, true);

    });

    it("Changing active to inactive status should work", () => {
        let pack = new PaymentPackage("Ivan", 200);
        pack.active = false;
        assert.equal(pack.active, false);
    });

    it("Changing VAT value should work", () => {
        let pack = new PaymentPackage("Ivan", 200);
        pack.VAT = 30;
        assert.equal(pack.VAT, 30);
    });

    it("Changing name property should work", () => {
        let pack = new PaymentPackage("Gosho", 200);
        pack.name = "Toni";
        assert.equal(pack.name, "Toni");
    });

    it("Changing value property should work", () => {
        let pack = new PaymentPackage("Gosho", 200);
        pack.value += 150;
        assert.equal(pack.value, 350);
    });

});


describe("Testing parameter validation for each object property", () => {

    //NAME PROPERTY VALIDATION
    it("Testing set NAME parameter validation", () => {
        assert.throw(() => {
            let pack = new PaymentPackage(10, 200);
        }, "Name must be a non-empty string");

        assert.throw(() => {
            let pack = new PaymentPackage("", 200);
        }, "Name must be a non-empty string");

        assert.throw(() => {
            let pack = new PaymentPackage(true, 200);
        }, "Name must be a non-empty string");

        assert.throw(() => {
            let pack = new PaymentPackage(5.5, 200);
        }, "Name must be a non-empty string");

        assert.throw(() => {
            let pack = new PaymentPackage(undefined, 200);
        }, "Name must be a non-empty string")

        assert.throw(() => {
            let pack = new PaymentPackage(null, 200);
        }, "Name must be a non-empty string")

        assert.throw(() => {
            let pack = new PaymentPackage({}, 200);
        }, "Name must be a non-empty string");

        assert.throw(() => {
            let pack = new PaymentPackage([], 200);
        }, "Name must be a non-empty string");

    });


    //VALUE PROPERTY VALIDATION
    it("Testing set VALUE parameter validation", () => {
        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", -10);
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", -5.5);
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", '5');
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", -10);
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", " ");
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", false);
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", undefined);
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", {});
        }, "Value must be a non-negative number");

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", []);
        }, "Value must be a non-negative number");
    });


    //VAT PROPERTY VALIDATION
    it("Testing set VAT parameter validation", () => {
        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = -5;
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = -33.3333;
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = '3';
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = false;
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = undefined;
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = null;
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = [];
        }, 'VAT must be a non-negative number');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 150);
            pack.VAT = {};
        }, 'VAT must be a non-negative number');

    });


    //ACTIVE PROPERTY VALIDATION
    it("Testing set ACTIVE parameter validation", () => {
        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = 3;
        }, 'Active status must be a boolean');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = "hi";
        }, 'Active status must be a boolean');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = undefined;
        }, 'Active status must be a boolean');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = null;
        }, 'Active status must be a boolean');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = {};
        }, 'Active status must be a boolean');

        assert.throw(() => {
            let pack = new PaymentPackage("Pesho", 230);
            pack.active = [];
        }, 'Active status must be a boolean');
    });

});

describe('toString method', () => {
    let package;
    beforeEach(() => package = new PaymentPackage('Fee', 1000));

    it('should return correct string representation', () => {
        let expected = 'Package: Fee\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200'
        let actual = package.toString();
        assert.equal(actual, expected);
    })
    it('should return correct string if active status is false', () => {
        package.active = false;
        let expected = 'Package: Fee (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200'
        let actual = package.toString();
        assert.equal(actual, expected);
    })
    it('should return correct string if VAT is changed', () => {
        package.VAT = 27;
        let expected = 'Package: Fee\n- Value (excl. VAT): 1000\n- Value (VAT 27%): 1270'
        let actual = package.toString();
        assert.equal(actual, expected);
    });
});