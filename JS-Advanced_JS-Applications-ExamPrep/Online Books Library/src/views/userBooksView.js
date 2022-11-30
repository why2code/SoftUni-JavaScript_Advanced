import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { userBookDetails } from '../dataController.js';

export async function showUserBooks(ctx){

    let userId = ctx.user._id;
    let books = await userBookDetails(userId);

    ctx.render(templUserBooks(books));
}

function templUserBooks(books){
    return html`
         <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            ${books.length > 0 ?
                books.map(bookDetails)
            :
                html`<p class="no-books">No books in database!</p>`
            }
           
            <!-- Display paragraph: If the user doesn't have his own books  -->
           
        </section>
    `;
}

function bookDetails(book){
    return html`
         <ul class="my-books-list">
                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/mybooks/${book._id}">Details</a>
                </li>
            </ul>

    `;
}