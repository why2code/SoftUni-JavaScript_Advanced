
import { html } from '../../node_modules/lit-html/lit-html.js'
import { getCatalogueGames } from '../dataController.js';

export async function showCatalogue(ctx) {
    let gamesList = await getCatalogueGames();

    ctx.render(generateCalatogueTemplate(gamesList));
}

function generateCalatogueTemplate(gamesList) {
    return html`
        <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${gamesList.length > 0 ? 
                gamesList.map(g => gameDetailsTemplate(g))
            :
                html`<h3 class="no-articles">No articles yet</h3>`}
                       
        </section>
    `;
}

function gameDetailsTemplate(game){
    return html`
      <div class="allGames">
                <div class="allGames-info">
                    <img src=".${game.imageUrl}">
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>
        
            </div>
    `;
}