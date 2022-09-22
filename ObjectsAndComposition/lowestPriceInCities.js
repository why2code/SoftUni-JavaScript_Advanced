function lowestPriceInTown(data) {
    let result = {};

    for (let productData of data) {
        let [town, product, price] = productData.split(' | ');
        price = Number(price);

        if (result.hasOwnProperty(product)) {
            let currTown = result[product][town];
            let currPrice = result[product]["price"];

            if (currPrice > price) {
                result[product] = { town, price };
            }
        }
        else {
            result[product] = { town, price };
        }
    }

    for (let [product, value] of Object.entries(result)) {
        console.log(`${product} -> ${value.price} (${value.town})`)
    }
}

lowestPriceInTown(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Sample Product | 500',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
);

