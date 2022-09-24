function solve() {
  let textInput = document.getElementById("input").value;
  let arrText = textInput.split(".").filter(x => x);

  let output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = 0; i < arrText.length; i+=3) {
      let res = [];
      for(let x = 0; x < 3; x++){
          if(arrText[i + x]){
            res.push(arrText[i + x]);
          }
      }

      let resText = res.join(". ") + ".";
      output.innerHTML += `<p>${resText}</p>`;
  }

}