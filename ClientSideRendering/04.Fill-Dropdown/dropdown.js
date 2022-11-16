import { html, render } from '../node_modules/lit-html/lit-html.js';
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

let drdown = document.getElementById("menu");
let inputField = document.getElementById("itemText");
let form = document.querySelector("form");
form.addEventListener("submit", onSubmit)

async function addItem() {

    let optionsInfo = await api("GET", url);
    const resultOptions = Object.values(optionsInfo).map(x => renderOptions(x));
    render(resultOptions, drdown);

}

function renderOptions(o) {
    const resultOptions =
        html`<option value=${o._id}>${o.text}</option>`;
    return resultOptions;
}


async function onSubmit(e) {
    e.preventDefault();
    let text = e.target.children[1].value;

    if (text) {
        let result = await api("POST", url, { text });
        let updatedText = await api("GET", url);
        let newUpdatedOptions = Object.values(updatedText).map(o => renderOptions(o));
        form.reset();
        render(newUpdatedOptions, drdown);
    }
}

async function api(method, url, body) {
    const options = {
        method,
        headers: {}
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const token = sessionStorage.getItem('accessToken');
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    try {
        let response = await fetch(url, options);
        if (response.ok !== true) {
            const err = await response.json();
            throw new Error(err.message);
        }
        if (response.status == 204) {
            return response
        }

        return response.json();
    }
    catch (err) {
        alert(err.message);
        throw err;
    }
}


addItem();