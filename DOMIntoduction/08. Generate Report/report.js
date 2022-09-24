function generateReport() {
    let tableRow = document.querySelectorAll("tbody tr");
    let tableHead = document.querySelectorAll("thead tr th");

    let res = [];

    for(let i = 0; i < tableRow.length; i++){
        let tempData = {};
        let tableData = tableRow[i].cells;
        for(let x = 0; x < tableData.length; x++){
            let infoForHeader = tableHead[x].childNodes;
            if(infoForHeader[1].checked){
                tempData[infoForHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[x].textContent;
            }
        }
        res.push(tempData);
    }

    let jsonRes = JSON.stringify(res);
    document.getElementById("output").textContent = jsonRes;

}