
import { html } from '../../node_modules/lit-html/lit-html.js'
import { singleGameDetails, updateExistingGame } from '../dataController.js';


export async function showEditView(ctx){
    const gameId = ctx.params.id;
    let currGame = await singleGameDetails(gameId);
    
    ctx.render(tempEditGameDetails(currGame,postEdits));


    async function postEdits(e){
        e.preventDefault();
        let form = new FormData(e.target);
        let {title, category, maxLevel, imageUrl, summary} = Object.fromEntries(form);

        if(!title || !category || !maxLevel || !imageUrl || !summary){
            return alert("All fields must be non-empty fields, please add information.");
        }

        await updateExistingGame(gameId, title, category, maxLevel, imageUrl, summary);
        ctx.page.redirect(`/details/${gameId}`);
    }
}

function tempEditGameDetails(currGame, postEdits){
    return html`
      <section id="edit-page" class="auth">
            <form @submit=${postEdits} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${currGame.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${currGame.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${currGame.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value="${currGame.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${currGame.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
    `;
}