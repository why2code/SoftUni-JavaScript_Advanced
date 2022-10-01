function addItem() {
    let textElement = document.getElementById('newItemText').value;
    let valueElement = document.getElementById('newItemValue').value;


    let newElToAdd = document.createElement('option');
    newElToAdd.textContent = textElement;
    newElToAdd.value = valueElement;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(newElToAdd);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}