import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../controller/api.js';
import { getTableData } from '../controller/commsModule.js';


export async function showTable(ctx) {

    const test = html`<tr><td>Hello</td><td>Hello Two</td><td>Hello Three</td></tr>`;
    ctx.render(test)

    //let data = await getTableData();
    //ctx.render(tableTemplate(data));

}

const tableTemplate = (data) => Object.values(data).map(x => html`
            <tr>
                <td>${x.firstName} ${x.lastName}</td>
                <td>${x.email}</td>
                <td>${x.course}</td>
            </tr>
        `);

