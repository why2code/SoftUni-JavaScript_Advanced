import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { deleteGame, singleGameDetails } from '../dataController.js';

export async function showGameDetails(ctx) {
    const id = ctx.params.id;
    const user = ctx.user;
    let isOwner = false;

    let currGame = await singleGameDetails(id)

    if(user){
        const creatorId = user._id;
        isOwner = creatorId == currGame._ownerId;
    }

    
    ctx.render(templGameDetailsView(currGame, isOwner, onDelete));

    async function onDelete(){
        await deleteGame(id);
        ctx.page.redirect('/');
    }
}


function templGameDetailsView(currGame, isOwner, onDelete) {
    return html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src="${currGame.imageUrl}" />
                <h1>${currGame.title}</h1>
                <span class="levels">MaxLevel: ${currGame.maxLevel}</span>
                <p class="type">${currGame.category}</p>
            </div>
    
            <p class="text">
                ${currGame.summary}
            </p>
    
            <!-- Bonus bonusCommentsSection -->
          
    
            ${isOwner ? 
            html`<div class="buttons">
                <a href="/edit/${currGame._id}" class="button">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                 </div>`
            : nothing}
            
        </div>
    
        <!-- Bonus -->
        <!--addNewComment -->
        
    
    </section>
    `;
}

function bonusCommentsSection(){
    return html`
    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                    <!-- list all comments for current game (If any) -->
                    <li class="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li class="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                <!-- Display paragraph: If there are no games in the database -->
                <p class="no-comment">No comments.</p>
            </div>
    `;
}

function addNewComment(){
    return html`
      <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
      <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>
    `;
}