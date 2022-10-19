function solve() {
    
    let nameField = document.getElementById("fname");
    let lastNameField = document.getElementById("lname");
    let mailField = document.getElementById("email");
    let bdayField = document.getElementById("birth");
    let posField = document.getElementById("position");
    let salaryField = document.getElementById("salary");

    let bodyDiv = document.getElementById("tbody");
    let button = document.getElementById("add-worker");
    let sumField = document.getElementById("sum");
    let sumValue = Number(sumField.textContent);
    button.addEventListener("click", transferData);

    
    function transferData(e){
        let nameValue = nameField.value;
        let lnameValue = lastNameField.value;
        let mailValue = mailField.value;
        let bdayValue = bdayField.value;
        let posValue = posField.value;
        let salaryValue = salaryField.value;

        e.preventDefault();

        if(!nameValue || !lnameValue || !mailValue || !bdayValue || !posValue || !salaryValue){
            return;
        }
        else{
            let tr = document.createElement("tr");

            let nameTd = document.createElement("td");
            nameTd.textContent = nameValue;

            let lastNameTd = document.createElement("td");
            lastNameTd.textContent = lnameValue;

            let emailTd = document.createElement("td");
            emailTd.textContent = mailValue;

            let birthdateTd = document.createElement("td");
            birthdateTd.textContent = bdayValue;

            let positionTd = document.createElement("td");
            positionTd.textContent = posValue;

            let salaryTd = document.createElement("td");
            salaryTd.textContent = salaryValue;
            
            let btnTd = document.createElement("td");
            let firedBtn = document.createElement("button");
            firedBtn.addEventListener("click", firingFunc);
            let editBtn = document.createElement("button");
            editBtn.addEventListener("click", editFunc);

            firedBtn.setAttribute("class", "fired");
            firedBtn.textContent = "Fired";
            editBtn.setAttribute("class", "edit");
            editBtn.textContent = "Edit";
            btnTd.appendChild(firedBtn);
            btnTd.appendChild(editBtn);

            tr.appendChild(nameTd);
            tr.appendChild(lastNameTd);
            tr.appendChild(emailTd);
            tr.appendChild(birthdateTd);
            tr.appendChild(positionTd);
            tr.appendChild(salaryTd);
            tr.appendChild(btnTd);
            bodyDiv.appendChild(tr);

            sumValue = (Number(sumValue) + Number(salaryValue)).toFixed(2);
           // sumField.textContent = "";
            sumField.textContent = Number(sumValue).toFixed(2);

            nameField.value = "";
            lastNameField.value = "";
            mailField.value = "";
            bdayField.value = "";
            posField.value = "";
            salaryField.value = "";

        }

    }

    
    function editFunc(e){
        debugger
        let nameToReturn = e.target.parentElement.parentElement.children[0].textContent;
        let lastNameToRerturn = e.target.parentElement.parentElement.children[1].textContent;
        let emailToReturn = e.target.parentElement.parentElement.children[2].textContent;
        let bdayToReturn = e.target.parentElement.parentElement.children[3].textContent;
        let posToReturn = e.target.parentElement.parentElement.children[4].textContent;
        let salaryToReturn = e.target.parentElement.parentElement.children[5].textContent;

        nameField.value = nameToReturn;
        lastNameField.value = lastNameToRerturn;
        mailField.value = emailToReturn;
        bdayField.value = bdayToReturn;
        posField.value = posToReturn;
        salaryField.value = salaryToReturn;

        sumValue = (Number(sumValue) - Number(salaryToReturn)).toFixed(2);
        sumField.textContent = Number(sumValue).toFixed(2);
        e.target.parentElement.parentElement.remove()
    }

    
    function firingFunc(e){
        let salaryToRemove = e.target.parentElement.parentElement.children[5].textContent;
        sumValue = (Number(sumValue) - Number(salaryToRemove)).toFixed(2);
        sumField.textContent = Number(sumValue).toFixed(2);
        e.target.parentElement.parentElement.remove()
    }


}

solve()