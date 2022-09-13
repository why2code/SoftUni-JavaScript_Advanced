
function sameNumbers(num){
    let numAsString = num.toString();
    let firstDigit = numAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.lenght; i++){
        if (numAsString[i] !== firstDigit){
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }    
   
    console.log(isSame);
    console.log(sum);
   
}

sameNumbers(222222);
sameNumbers(1234);
