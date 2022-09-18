function rotator(arr, counter){
    let optimalRotator = arr.length - (counter % arr.length);

    for(let i = 0; i < optimalRotator; i++){
        let elementRotaded = arr.shift();
        arr.push(elementRotaded);
    }

    console.log(arr.join(' '));
}

rotator(['1', 
'2', 
'3', 
'4'], 
2
);

console.log('--------------------');

rotator(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);