import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get, post, put, del } from './controller/api.js';
import { initialTemplate } from './models/booksView.js'
import { createTableRows } from './models/tableView.js';


// import {default as page} from '../../node_modules/page/page.mjs'
// import { displayAllBooks } from './models/booksView.js';


const root = document.querySelector('body');
const url = 'jsonstore/collections/books/';

function onLoad() {
    render(initialTemplate, root)
}

onLoad();


document.querySelector('#loadBooks').addEventListener('click', loadBooks);
const body = document.querySelector('tbody');

async function loadBooks() {
    render(await createTableRows(), body);

    body.querySelectorAll('button:nth-of-type(2)').forEach(b => b.addEventListener('click', onDelete));
    body.querySelectorAll('button:nth-of-type(1)').forEach(b => b.addEventListener('click', onEdit));
}

const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', onAdd);

async function onAdd(e) {
    e.preventDefault();

    let formData = new FormData(addForm);
    let title = formData.get('title');
    let author = formData.get('author');

    if (title == '' || author == '') return;

    let response = await post(url, { title, author });

    if (response.status == 200) {
        loadBooks();
    }

    render(await createTableRows(), body);
    addForm.reset();
}

const editForm = document.querySelector('#edit-form');
editForm.addEventListener('submit', onSave);

async function onSave(e) {
    e.preventDefault();

    let formData = new FormData(editForm);

    let id = formData.get('id');
    let title = formData.get('title');
    let author = formData.get('author');

    if (title == '' || author == '') return;

    let response = await put(url + id, { title, author });

    if (response.status == 200) {
        loadBooks();
    }

    editForm.reset();
}
async function onDelete(e) {
    let response = await del(url + e.target.id);
    loadBooks();
}

function onEdit(e) {
    addForm.style.display = 'none';
    editForm.style.display = 'block';

    let author = e.target.parentNode.parentNode.children[1].textContent;
    let title = e.target.parentNode.parentNode.children[0].textContent;
    let [idInput, titleInput, authorInput] = editForm.querySelectorAll('input');

    idInput.value = e.target.id;
    titleInput.value = title;
    authorInput.value = author;
}