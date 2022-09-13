'use strict'

function sameNumbers(num){
    let numAsString = num.toString();
    let firstDigit = numAsString[0];
    let isSame = true;
    let sum = Number(firstDigit);

    for (let i = 1; i < numAsString.length; i++){
        if (numAsString[i] !== firstDigit){
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }    
   
    console.log(isSame);
    console.log(sum);
   
}


sameNumbers(2222222);
sameNumbers(1234);
