import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { deleteBook, singleBook } from '../dataController.js';

export async function showBookDetails(ctx){
    
    const id = ctx.params.id;
    let book = await singleBook(id);
    
    const isOwner = ctx.user?._id === book._ownerId; 
    const isLogged = !!ctx.user;

    ctx.render(templDetailsForBook(book, isOwner, isLogged, onLike, onDelete));

    async function onDelete(){
        await deleteBook(id);
        ctx.page.redirect('/');
    }

    function onLike(){
        debugger
    }

}

function templDetailsForBook(book, isOwner, isLogged, onLike, onDelete){
    return html`
           <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${isOwner ?
                    html`
                      <a class="button" href="/edit/${book._id}">Edit</a>
                      <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                    : nothing }
                  

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${!isOwner && isLogged ?
                    html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
                    : nothing}
                    
                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
    `;
}