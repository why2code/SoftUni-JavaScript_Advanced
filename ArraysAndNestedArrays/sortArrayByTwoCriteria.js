function sortArrayByTwoCriteria(arr) {
    return arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).join('\n');
}

console.log(sortArrayByTwoCriteria(['alpha',
    'beta',
    'gamma']
));

console.log(sortArrayByTwoCriteria(['Isacc',
    'Theodor',
    'Zuliu',
    'Jack',
    'Harrison',
    'George']
));