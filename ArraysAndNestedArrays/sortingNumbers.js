function sortNumbers(arr){
    let result = [];
    arr.sort((a, b) => a - b);
    let operationCount = arr.length;

    for(let i = 0; i < operationCount / 2; i++){
            let smallestCurrentNumber = arr.shift();
            let biggestCurrentNumber = arr.pop();
            result.push(smallestCurrentNumber);
            result.push(biggestCurrentNumber);
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));