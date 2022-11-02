function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadFunc);
    document.getElementById("btnCreate").addEventListener("click", createInfoFunc);
    let personArea = document.getElementById("person");
    let phoneArea = document.getElementById("phone");
    let ulList = document.getElementById("phonebook");

    let url = `http://localhost:3030/jsonstore/phonebook`;


    async function loadFunc() {
        //"<person>: <phone> " and a [Delete] 

        ulList.innerHTML = "";
        let response = await fetch(url);
        let data = await response.json();

        for (let id in data) {
            let li = document.createElement("li");
            li.textContent = `${data[id].person}: ${data[id].phone}`;
            let btn = document.createElement("button");
            btn.setAttribute("id", `${data[id]._id}`)
            btn.textContent = "Delete";
            btn.addEventListener("click", deleteEntry)

            li.appendChild(btn);
            ulList.appendChild(li);
        }

    }

    async function createInfoFunc(e) {
        let personToAdd = personArea.value;
        let personsPhoneNumber = phoneArea.value;

        let newPersonRecord = {
            person: personToAdd,
            phone: personsPhoneNumber
        }

        let response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPersonRecord)
        });

        let data = await response.json();
        loadFunc();
        return data;

    }


    async function deleteEntry(e) {
        let idToSearch = e.target.id;

        let response = await fetch(url + `/${idToSearch}`, {
            method: 'DELETE'
        });

        let data = await response.json();
        loadFunc();
        return data;
    }

}

attachEvents();