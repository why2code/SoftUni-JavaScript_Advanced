function fruitShop(fruit, weight, price){

    let weightInKg = weight / 1000;
    let totalCost = price * weightInKg;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruitShop('orange', 2500, 1.80);
fruitShop('apple', 1563, 2.35);
