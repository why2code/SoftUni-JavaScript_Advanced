function magicMatrixIdentifier(matrix) {

    let maxColIndex = matrix[0].length;
    let maxRowIndex = matrix.length;

    let currRowSum = 0;
    let nextRowSum = 0;
    let currColSum = 0;
    let nextColSum = 0;

    let matchingSum = 0;
    let areEqual = true;

    //Verify Sum by rows
    for (let row = 0; row < maxRowIndex - 1; row++) {
        for (let col = 0; col < maxColIndex; col++) {
            currRowSum += matrix[row][col];
            nextRowSum += matrix[row + 1][col];
        }

        if (currRowSum == nextRowSum) {
            matchingSum = currRowSum;
            currRowSum = 0;
            nextRowSum = 0;
        }
        else {
            areEqual = false;
            break;
        }
    }

    //Verify Sum by cols (and match to rows sum)
    for(let col = 0; col < maxColIndex - 1; col++){
        for(let row = 0; row < maxRowIndex; row++){
            currColSum += matrix[row][col];
            nextColSum += matrix[row][col + 1];
        }

        if(currColSum == nextColSum && currColSum == matchingSum){
            currColSum = 0;
            nextColSum = 0;
        }
        else{
            areEqual = false;
            break;
        }
    }

    return areEqual;
}


(magicMatrixIdentifier([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));


