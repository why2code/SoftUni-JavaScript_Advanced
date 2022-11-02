async function init() {
    let fnameField = document.querySelector("[name=firstName]");
    let lnameField = document.querySelector("[name=lastName]");
    let facultyNumber = document.querySelector("[name=facultyNumber]");
    let gradeField = document.querySelector("[name=grade]");

    let url = `http://localhost:3030/jsonstore/collections/students`;
    let tableBodyOutput = document.getElementById("results").children[1];
    document.getElementById("submit").addEventListener("click", dataSubmit);


    async function dataSubmit(e) {
        e.preventDefault();
        tableBodyOutput.innerHTML = "";

        let fnValue = fnameField.value;
        let lnValue = lnameField.value;
        let fcValue = facultyNumber.value;
        let grValue = gradeField.value;

        if (!fnValue || !lnValue || !fcValue || !grValue) {
            let response = await fetch(url);
            let data = await response.json();
            generateLineReport(data);
        }
        else{
            let newStudent = {
                firstName: fnValue,
                lastName: lnValue,
                facultyNumber: fcValue,
                grade: grValue
            }
            let response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStudent)
            });
            let result = response.json();

            let updatedResponse = await fetch(url);
            let newData = await updatedResponse.json();
            generateLineReport(newData);

            fnameField.value = "";
            lnameField.value = "";
            facultyNumber.value = "";
            gradeField.value = "";
            return {result, newData};
        }
    }

    function generateLineReport(data) {
        for (let student in data) {
            let tr = document.createElement("tr");

            let tdName = document.createElement("td");
            tdName.textContent = data[student].firstName;

            let tdLastName = document.createElement("td");
            tdLastName.textContent = data[student].lastName;

            let tdFaculty = document.createElement("td");
            tdFaculty.textContent = data[student].facultyNumber;

            let tdGrade = document.createElement("td");
            tdGrade.textContent = Number(data[student].grade).toFixed(2);

            tr.appendChild(tdName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdFaculty);
            tr.appendChild(tdGrade);
            tableBodyOutput.appendChild(tr);
        }

    }
}

init();