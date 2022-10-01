function solve() {

  let buttons = Array.from(document.getElementsByTagName("button"));
  buttons[0].addEventListener("click", furnitureInputRead);
  buttons[1].addEventListener("click", buyReportGenerate);

  let inputArea = document.getElementsByTagName("textarea")[0];
  let outputArea = document.getElementsByTagName("textarea")[1];

  function furnitureInputRead() {
    let inputText = JSON.parse(inputArea.value);
    let tableBody = document.getElementsByTagName("tbody")[0];

    for (let item of inputText) {
      let newTR = document.createElement("tr");
      newTR.innerHTML = `<td><img src = "${item.img}"></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type = "checkbox"></td>`;
      tableBody.appendChild(newTR);
    }
    inputArea.value = "";

  }

  function buyReportGenerate() {
    let rows = Array.from(document.getElementsByTagName("tr"));
    let res = [];
    for (let i = 2; i < rows.length; i++) {
      if (rows[i].querySelector("input[type=checkbox]:checked")) {
        let data = Array.from(rows[i].querySelectorAll("td"));
        let info = {
          name: data[1].textContent,
          price: Number(data[2].textContent),
          decFactor: Number(data[3].textContent)
        }
        res.push(info);
      }
    }

    let namesOfFurnituresBought = "";
    let totalPrice = 0;
    let avgDecPrice = 0;
    for (let i = 0; i < res.length; i++) {
      if (i < res.length - 1) {
        namesOfFurnituresBought += res[i].name + ", ";
      }
      else {
        namesOfFurnituresBought += res[i].name;
      }

      totalPrice += res[i].price;
      avgDecPrice += res[i].decFactor;
    }
    avgDecPrice = avgDecPrice / res.length;

    outputArea.value = `Bought furniture: ${namesOfFurnituresBought}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecPrice}`;

  }

}