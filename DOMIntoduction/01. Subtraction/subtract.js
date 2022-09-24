function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;

    console.log(firstNum);
    console.log(secondNum)
    console.log(`${firstNum - secondNum}`);

    let res = firstNum - secondNum;
    document.getElementById("result").innerText = res;

}