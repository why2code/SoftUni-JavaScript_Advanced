function juiceFlavors(input) {
    
    let factory = {};
    let totalBoxesProduced = [];

    for (let juice of input) {
        let [juiceType, quantity] = juice.split(' => ');
        if(!factory.hasOwnProperty(juiceType)){
            factory[juiceType] = 0;
        }
        factory[juiceType] += Number(quantity);

        if(factory[juiceType] >= 1000){
            
            if(!totalBoxesProduced.hasOwnProperty(juiceType)){
                totalBoxesProduced[juiceType] = 0;
            }

            let boxQuantityMultiplier = Math.floor(factory[juiceType] / 1000);
            let remainingQuantity = factory[juiceType] - 1000 * boxQuantityMultiplier;
            totalBoxesProduced[juiceType] += boxQuantityMultiplier;
            factory[juiceType] = remainingQuantity;
        }
    }

    for(let [k, v] of Object.entries(totalBoxesProduced)){
        console.log(`${k} => ${v}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

console.log('-------------------------------------------');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);