function carFactory(carInput) {
    let result = {
        model: carInput.model
    };


    const engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    result.engine = determineEngineSize(carInput.power);

    result.carriage = {
        type: carInput.carriage,
        color: carInput.color
    };

    let wheelSize = Number(carInput.wheelsize) % 2 === 0 ? Number(carInput.wheelsize) - 1
        : Number(carInput.wheelsize);
    result.wheels = new Array(4).fill(wheelSize);




    function determineEngineSize(power) {
        let determinedEngine = {};

        if (power <= 90) {
            determinedEngine = engineEnum["Small engine"];
        }
        else if (power > 90 && power <= 120) {
            determinedEngine = engineEnum["Normal engine"];
        }
        else {
            determinedEngine = engineEnum["Monster engine"];
        }
        return determinedEngine;
    }

    return result;
};



carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);