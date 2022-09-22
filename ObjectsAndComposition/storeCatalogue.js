function sort(input) {
    input.sort((a, b) => a.localeCompare(b));
    let comparisonLetter = '@';

    for (let item of input) {
        let firstLetter = item.substring(0, 1);
        let [word, value] = item.split(' : ');

        if (firstLetter.charCodeAt(0) - comparisonLetter.charCodeAt(0) > 0) {
            comparisonLetter = firstLetter;

            console.log(firstLetter);
            console.log(`  ${word}: ${value}`);
        }
        else {
            console.log(`  ${word}: ${value}`);
        }
    }


}

sort(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

console.log('---------------------------------------')

sort(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);
