async function getInfo() {
    let idEl = document.getElementById("stopId");
    let idValue = idEl.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${idValue}`;

    let response = await fetch(url);
    let data = await response.json();
    
    debugger
}