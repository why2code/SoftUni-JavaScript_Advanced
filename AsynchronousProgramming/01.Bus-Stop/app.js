async function getInfo() {
    let idEl = document.getElementById("stopId");
    let nameEl = document.getElementById("stopName");
    let busesUl = document.getElementById("buses");
    let idValue = idEl.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${idValue}`;

   try{
    let response = await fetch(url);
    let data = await response.json();
    
    nameEl.textContent = data.name;
    idEl.value = "";
    busesUl.innerHTML = "";

    Object.entries(data.buses).forEach(([k,v]) =>{
        let li = document.createElement("li");
        li.textContent = `Bus ${k} arrives in ${v} minutes`
        busesUl.appendChild(li);
    });
   } catch(e){
    nameEl.textContent = "Error";
   }

}