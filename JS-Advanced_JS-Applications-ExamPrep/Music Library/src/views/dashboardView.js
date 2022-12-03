import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAlbums } from '../dataController.js';

export async function showDashboard(ctx) {

    let albums = await getAlbums();

    ctx.render(templDashboard(albums));
}

function templDashboard(albums) {
    return html`
        <section id="dashboard">
            <h2>Albums</h2>
            ${albums.length > 0 ? 
            html`
             <ul class="card-wrapper">
                ${albums.map(cardTemp)}
             </ul>
            `
            :
            html`<h2>There are no albums added yet.</h2>`
            }
                      
        </section>
    `;
}

function cardTemp(card){
    return html`
            <li class="card">
                    <img src=${card.imageUrl} alt="travis" />
                    <p>
                        <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
                    </p>
                    <p>
                        <strong>Album name: </strong><span class="album">${card.album}</span>
                    </p>
                    <p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
                    <a class="details-btn" href="/dashboard/${card._id}">Details</a>
                </li>
        `;
}