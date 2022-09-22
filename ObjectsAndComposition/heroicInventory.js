function heroicInventory(heroInputData) {
    let heroDepository = [];

    for (let heroDetails of heroInputData) {
        let currentHero = {};

        let [heroName, age, items] = heroDetails.split(" / ");
        currentHero.name = heroName;
        currentHero.level = Number(age);

        let weapons = items ? items.split(', ') : [];
        currentHero.items = weapons;
        heroDepository.push(currentHero);
    }
    console.log(JSON.stringify(heroDepository));
}

heroicInventory(
    ['Isacc / 25  ']
);

heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
);