import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../controller/api.js';

const url = 'jsonstore/collections/books';
export async function createTableRows() {
    let allBooks = await get(url);
    
    let tableTemplate = html`
${Object.entries(allBooks).map(book => html`
<tr .id=${book[0]}>
    <td>${book[1].title}</td>
    <td>${book[1].author}</td>
    <td>
        <button .id=${book[0]}>Edit</button>
        <button .id=${book[0]}>Delete</button>
    </td>
</tr>
`)}`;

    return tableTemplate;
}