import { html } from '../../node_modules/lit-html/lit-html.js'
import { newGame } from '../dataController.js';


export async function showCreateGame(ctx) {

    ctx.render(templateNewGameCreation(onSubmit));


    async function onSubmit(e){
        e.preventDefault();
        let form = new FormData(e.target);
        let {title, category, maxLevel, imageUrl, summary} = Object.fromEntries(form);

        if(!title || !category || !maxLevel || !imageUrl || !summary){
            return alert("All fields must be non-empty fields, please add information.");
        }

        await newGame(title, category, maxLevel, imageUrl, summary);
        ctx.page.redirect('/');
    }
}

function templateNewGameCreation(onSubmit) {
    return html`
    <section id="create-page" class="auth">
        <form @submit=${onSubmit} id="create">
            <div class="container">
    
                <h1>Create Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title...">
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category...">
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game">
            </div>
        </form>
    </section>
    `;
}