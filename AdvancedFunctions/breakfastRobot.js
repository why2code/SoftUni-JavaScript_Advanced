// •	apple - made with 1 carbohydrate and 2 flavour
// •	lemonade - made with 10 carbohydrate and 20 flavour
// •	burger - made with 5 carbohydrate, 7 fat and 3 flavour
// •	eggs - made with 5 protein, 1 fat and 1 flavour
// •	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour

function solution(input) {
    let resultOutput = "";
    let recipe = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let proteinAvailable = recipe.protein;
    let carbsAvailable = recipe.carbohydrate;
    let fatAvailalbe = recipe.fat;
    let flavourAvailable = recipe.flavour;

    let unsufficientIngredient = "";

    return function cooker(input) {
        let commArgs = input.split(" ");
        let commType = commArgs[0];

        if (commType === "prepare") {
            let foodToPrep = commArgs[1];
            let quantity = Number(commArgs[2]);

            if (foodToPrep === "apple") {
                if (carbsAvailable >= 1 * quantity) {
                    if (flavourAvailable >= 2 * quantity) {
                        carbsAvailable -= 1 * quantity;
                        flavourAvailable -= 2 * quantity;
                        return `Success`;
                    }
                    else {
                        unsufficientIngredient = "flavour";
                    }

                }
                else {
                    unsufficientIngredient = "carbohydrate";
                }
                return `Error: not enough ${unsufficientIngredient} in stock`;
            }
            else if (foodToPrep === "lemonade") {
                if (carbsAvailable >= 10 * quantity) {
                    if (flavourAvailable >= 20 * quantity) {
                        carbsAvailable -= 10 * quantity;
                        flavourAvailable -= 20 * quantity;
                        return `Success`;
                    }
                    else {
                        unsufficientIngredient = "flavour";
                    }

                }
                else {
                    unsufficientIngredient = "carbohydrate";
                }
                return `Error: not enough ${unsufficientIngredient} in stock`;
            }
            else if (foodToPrep === "burger") {
                if (carbsAvailable >= 5 * quantity) {
                    if (fatAvailalbe >= 7 * quantity) {
                        if (flavourAvailable >= 3 * quantity) {
                            carbsAvailable -= 5 * quantity;
                            fatAvailalbe -= 7 * quantity;
                            flavourAvailable -= 3 * quantity;
                            return `Success`;
                        }
                        else {
                            unsufficientIngredient = "flavour";
                        }

                    }
                    else {
                        unsufficientIngredient = "fat";
                    }

                }
                else {
                    unsufficientIngredient = "carbohydrate";
                }
                return `Error: not enough ${unsufficientIngredient} in stock`;
            }
            else if (foodToPrep === "eggs") {
                if (proteinAvailable >= 5 * quantity) {
                    if (fatAvailalbe >= 1 * quantity) {
                        if (flavourAvailable >= 1 * quantity) {
                            proteinAvailable -= 5 * quantity;
                            fatAvailalbe -= 1 * quantity;
                            flavourAvailable -= 1 * quantity;
                            return `Success`;
                        }
                        else {
                            unsufficientIngredient = "flavour";
                        }

                    }
                    else {
                        unsufficientIngredient = "fat";
                    }

                }
                else {
                    unsufficientIngredient = "protein";
                }
                return `Error: not enough ${unsufficientIngredient} in stock`;
            }
            else if (foodToPrep === "turkey") {
                if (proteinAvailable >= 10 * quantity) {
                    if (carbsAvailable >= 10 * quantity) {
                        if (fatAvailalbe >= 10 * quantity) {
                            if (flavourAvailable >= 10 * quantity) {
                                proteinAvailable -= 10 * quantity;
                                carbsAvailable -= 10 * quantity;
                                fatAvailalbe -= 10 * quantity;
                                flavourAvailable -= 10 * quantity;
                                return `Success`;
                            }
                            else {
                                unsufficientIngredient = "flavour";
                            }

                        }
                        else {
                            unsufficientIngredient = "fat";
                        }
                    }
                    else {
                        unsufficientIngredient = "carbohydrate"
                    }

                }
                else {
                    unsufficientIngredient = "protein";
                }
                return `Error: not enough ${unsufficientIngredient} in stock`;
            }
        }
        else if (commType === "restock") {
            let elementToRestock = commArgs[1];
            let quantityToRestock = Number(commArgs[2]);

            if (elementToRestock === "protein") {
                proteinAvailable += quantityToRestock;
            }
            else if (elementToRestock === "carbohydrate") {
                carbsAvailable += quantityToRestock;
            }
            else if (elementToRestock === "fat") {
                fatAvailalbe += quantityToRestock;
            }
            else { //flavour
                flavourAvailable += quantityToRestock;
            }

            return `Success`;
        }
        else if (commType === "report") {
            resultOutput = `protein=${proteinAvailable} carbohydrate=${carbsAvailable} fat=${fatAvailalbe} flavour=${flavourAvailable}`;
            return resultOutput;
        }

    }

}

//let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
