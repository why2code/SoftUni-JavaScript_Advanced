function confirmValid(x1, y1, x2, y2){
    let numX1 = Number(x1);
    let numX2 = Number(x2);
    let numY1 = Number(y1);
    let numY2 = Number(y2);

    let x1y1ComparedToZero = Math.sqrt((numX1 - 0)**2 + (numY1 - 0)**2);
    let x2y2ComparedToZero = Math.sqrt((numX2 - 0)**2 + (numY2 - 0)**2);
    let doublePointsComparison = Math.sqrt((numX2 - numX1)**2 + (numY2 - numY1)**2);


    if(Number.isInteger(x1y1ComparedToZero)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    
    if(Number.isInteger(x2y2ComparedToZero)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(doublePointsComparison)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

confirmValid(3, 0, 0, 4);
confirmValid(2, 1, 1, 1);
