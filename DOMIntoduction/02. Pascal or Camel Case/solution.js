function solve() {
  let textToModify = (document.getElementById("text").value).toLowerCase();
  let modifier = document.getElementById("naming-convention").value;


  let resultingString = "";
  let iteratorForLetters = Array.from(textToModify.split(' '));

  if (modifier === "Camel Case") {
    resultingString += iteratorForLetters[0];
    for (let i = 1; i < iteratorForLetters.length; i++) {
      let currWord = iteratorForLetters[i].substring(0, 1).toUpperCase() + iteratorForLetters[i].substring(1);
      resultingString += currWord;
    }
  }
  else if (modifier === "Pascal Case") {
    for (let i = 0; i < iteratorForLetters.length; i++) {
      let currWord = iteratorForLetters[i].substring(0, 1).toUpperCase() + iteratorForLetters[i].substring(1);
      resultingString += currWord;
    }
  }
  else {
    resultingString = "Error!";
  }

  document.getElementById("result").innerHTML = resultingString;
  

}