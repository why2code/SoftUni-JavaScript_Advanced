import { html, render } from '../node_modules/lit-html/lit-html.js';

const form = document.querySelector("form");
let root = document.getElementById("root");
form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);
    const {towns} = Object.fromEntries(formData);

    let townsArr = towns.split(", ");
    let ul = html`<ul>${townsArr.map(town => createList(town))}</ul>`;
    form.reset();
    render(ul, root);
}

function createList(town){
    return html`<li>${town}</li>`;
}