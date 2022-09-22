function rectangle(width, height, color) {
    let adjColorString = (color.substring(0, 1)).toUpperCase() + color.substring(1);

    let triangle = {
        width: width,
        height: height,
        color: adjColorString,
        calcArea: function () {
            return Number(width) * Number(height);
        }
    }

    return triangle;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
