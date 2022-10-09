function carProducer(input){
    let carsManufactured = [];

    for(let inpArgs of input){
        let [brand, model, quantity] = inpArgs.split(' | ');
        if(!carsManufactured.hasOwnProperty(brand)){
            carsManufactured[brand] = [];
        }

        if(!carsManufactured[brand].hasOwnProperty(model)){
            carsManufactured[brand][model] = 0;
        }

        carsManufactured[brand][model] += Number(quantity);
    }   
    
    for(let [brand, model] of Object.entries(carsManufactured)){
        console.log(`${brand}`)
        for(let [car, quantity] of Object.entries(model)){
            console.log(`###${car} -> ${quantity}`);
        }
    }    
}

carProducer(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);