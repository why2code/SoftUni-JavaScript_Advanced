function calculator() {
    let numberOne;
    let numberTwo;
    let result;

    function init(selector1, selector2, resultOutput) {
        numberOne = document.querySelector(selector1);
        numberTwo = document.querySelector(selector2);
        result = document.querySelector(resultOutput);
    };

    //add function
    function add() {
        result.value = Number(numberOne.value) + Number(numberTwo.value);
    };

    //subtract function
    function subtract() {
        result.value = Number(numberOne.value) - Number(numberTwo.value);
    }

    //completing the final object
    let completedObject = {
        init,
        add,
        subtract
    };
    return completedObject;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');