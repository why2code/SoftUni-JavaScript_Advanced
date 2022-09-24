function solve() {
  let textInput = document.getElementById("input").value;

  let sentencesToFormat = Array.from(textInput.split('.')).filter(n => n);

  let result = "";

  if (sentencesToFormat.length > 0) {
    result = `<p> ${sentencesToFormat[0]}`;
  }

  for (let i = 1; i < sentencesToFormat.length; i++) {
    if (i % 3 === 0) {
      result += `</p>`;
      result += `<p>`;
    }
    result += `${sentencesToFormat[i]}.`;
  }

  document.getElementById("output").innerHTML = result;

}