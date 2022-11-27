import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { createComment, deleteGame, loadAllComments, singleGameDetails } from '../dataController.js';

export async function showGameDetails(ctx) {
    const id = ctx.params.id;
    const user = ctx.user;
    let isOwner = false;
    let isLoggedIn = false;

    let currGame = await singleGameDetails(id)

    if(user){
        const creatorId = user._id;
        isOwner = creatorId == currGame._ownerId;
        isLoggedIn = true;
    }

    let comments = await loadAllComments(id);
    
    ctx.render(templGameDetailsView(currGame, isOwner, onDelete, comments, isLoggedIn, renderComments));

    async function onDelete(){
        await deleteGame(id);
        ctx.page.redirect('/');
    }

    async function renderComments(e){
        e.preventDefault();
        let form = new FormData(e.target);
        let comment = Object.fromEntries(form);

        await createComment(id, comment);
        e.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}


function templGameDetailsView(currGame, isOwner, onDelete, comments, isLoggedIn, renderComments) {
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
            ${comments.length > 0 ?
            bonusCommentsSection(comments)
             :
              html`
               <div class="details-comments">
                    <h2>Comments:</h2>
                         <p class="no-comment">No comments.</p>
              </div>
              `
            }

            ${isOwner ? 
            html`<div class="buttons">
                <a href="/edit/${currGame._id}" class="button">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                 </div>`
            : nothing}
            
        </div>
            
        ${isLoggedIn && !isOwner ?
        addNewComment(renderComments)
        :
        nothing
        }
        <!-- Bonus -->
        <!--addNewComment -->
        
    
    </section>
    `;
}

function bonusCommentsSection(comments){
    return html`
    <!-- Bonus ( for Guests and Users ) -->
         <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                    <!-- list all comments for current game (If any) -->
                    ${comments.map(c => html`
                    <li class="comment">
                        <p>Content: ${c.comment.comment}</p>
                    </li>
                    `)}
                                       
                </ul>
                <!-- Display paragraph: If there are no games in the database -->
                
          </div>
    `;
}

function addNewComment(renderComments){
    return html`
      <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
      <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${renderComments} class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>
    `;
}