window.addEventListener('load', solve);

function solve() {
    let modelField = document.getElementById("model");
    let yearField = document.getElementById("year");
    let descriptionField = document.getElementById("description");
    let priceField = document.getElementById("price");

    let addButton = document.getElementById("add");
    addButton.addEventListener("click", buyFurniture);

    let outputTable = document.getElementById("furniture-list");
    let outputTotal = document.getElementsByClassName("total-price")[0];
    let currTotalOutput = Number(outputTotal.textContent);

    let  = Number(outputTotal.value);

    function buyFurniture(e) {
        e.preventDefault();

        let modelValue = modelField.value;
        let yearValue = Number(yearField.value);
        let descrValue = descriptionField.value;
        let priceValue = Number(priceField.value);

        if (!modelValue || !yearValue || !descrValue || !priceValue) {
            return;
        }
        else {
            if (yearValue < 0 || priceValue < 0) {
                return;
            }

            let tr = document.createElement("tr");
            tr.setAttribute("class", "info");

            let furnModelTd = document.createElement("td");
            furnModelTd.textContent = modelValue;

            let priceTd = document.createElement("td");
            priceTd.textContent = Number(priceValue).toFixed(2);


            let btnsTd = document.createElement("td");
            let moreBtn = document.createElement("button");
            moreBtn.setAttribute("class", "moreBtn");
            moreBtn.textContent = "More Info";
            moreBtn.addEventListener("click", showMoreInfo);

            let buyBtn = document.createElement("button");
            buyBtn.setAttribute("class", "buyBtn");
            buyBtn.textContent = "Buy it";
            buyBtn.addEventListener("click", buyFunc);

            btnsTd.appendChild(moreBtn);
            btnsTd.appendChild(buyBtn);

            tr.appendChild(furnModelTd);
            tr.appendChild(priceTd);
            tr.appendChild(btnsTd);
            outputTable.appendChild(tr);

            //creating the hidden tr with the remaining details
            let hiddenTr = document.createElement("tr");
            hiddenTr.setAttribute("class", "hide");

            let yearTd = document.createElement("td");
            yearTd.textContent = `Year: ${yearValue}`;
            let descrTd = document.createElement("td");
            descrTd.setAttribute("colspan", 3);
            descrTd.textContent = `Description: ${descrValue}`;

            hiddenTr.appendChild(yearTd);
            hiddenTr.appendChild(descrTd);
            outputTable.appendChild(hiddenTr);

            modelField.value = "";
            yearField.value = "";
            descriptionField.value = "";
            priceField.value = "";
        }
    }

    function showMoreInfo(e) {
        if (e.target.textContent === "More Info") {
            e.target.textContent = "Less Info";
            e.target.parentElement.parentElement.parentElement.children[1].setAttribute("style", "display: contents;");
        }
        else{
            e.target.textContent = "More Info";
            e.target.parentElement.parentElement.parentElement.children[1].setAttribute("style", "display: note;");
        }

    }

    function buyFunc(e) {
        let valueToAdd = Number(e.target.parentElement.parentElement.children[1].textContent);
        currTotalOutput = Number(currTotalOutput) + valueToAdd;
        outputTotal.textContent = Number(currTotalOutput).toFixed(2);

        e.target.parentElement.parentElement.remove();
    }

}
