const { cinema } = require("../03. Cinema/cinema.js");
const { assert } = require("chai");

describe("Tests …", function () {
     describe("Testing showMovies function", () => {

          it("movieArr lenght < 0 throws error", () => {
               let arr = [];
               let result = cinema.showMovies(arr);
               assert.equal(result, "There are currently no movies to show.");
          });

          it("movieArr lenght > 0 returns string", () => {
               let arr = ["1", "2"];
               let result = cinema.showMovies(arr);
               assert.equal(result, "1, 2");
          });

     });


     describe("Testing ticketPrice function", () => {

          it("Invalid projectType throws error", () => {
               assert.throw(() => {
                    cinema.ticketPrice("invalid type")
               }, 'Invalid projection type.');

               assert.throw(() => {
                    cinema.ticketPrice("premiere")
               }, 'Invalid projection type.');

               assert.throw(() => {
                    cinema.ticketPrice("PREMIERE")
               }, 'Invalid projection type.');
          });

          it("VALID projectType returns the correct price", () => {
               let price = cinema.ticketPrice("Premiere");
               assert.equal(price, 12.00);
          });

          it("VALID projectType returns the correct price", () => {
               let price = cinema.ticketPrice("Normal");
               assert.equal(price, 7.50);
          });

          it("VALID projectType returns the correct price", () => {
               let price = cinema.ticketPrice("Discount");
               assert.equal(price, 5.50);
          });

     });

     describe("Testing swapSeatsInHall func first parameter", () => {
          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall(0, 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall([], 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall("5", 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall({}, 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall(21, 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid firstPlace input", () => {
               let res = cinema.swapSeatsInHall(-5, 10);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });
     });

     describe("Testing swapSeatsInHall func second parameter", () => {
          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, 0);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, []);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, "10");
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, {});
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, 21);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, -8);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });

          it("Func swapSeatsInHall with invalid secondPlace input", () => {
               let res = cinema.swapSeatsInHall(5, 5);
               assert.equal(res, "Unsuccessful change of seats in the hall.");
          });
     });

     describe("Testing swapSeatsInHall func with valid parameters", () => {
          it("Valid parameters to function", () => {
               let res = cinema.swapSeatsInHall(5, 7);
               assert.equal(res, "Successful change of seats in the hall.");
          });

          it("Valid parameters to function", () => {
               let res = cinema.swapSeatsInHall(1, 3);
               assert.equal(res, "Successful change of seats in the hall.");
          });

          it("Valid parameters to function", () => {
               let res = cinema.swapSeatsInHall(19, 20);
               assert.equal(res, "Successful change of seats in the hall.");
          });
          it("Valid parameters to function", () => {
               let res = cinema.swapSeatsInHall(20, 19);
               assert.equal(res, "Successful change of seats in the hall.");
          });
     });



});
