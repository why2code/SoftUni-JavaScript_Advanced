//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import { loadBooks } from '../dataController.js';

export async function showHome(ctx) {

    let books = await loadBooks();
    ctx.render(homeViewGenerator(books))
}

function homeViewGenerator(books) {
      return html`
          <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            ${books.length > 0 ?
                books.map(bookTemp)
            :
             html`<p class="no-books">No books in database!</p>`
            }
          </section>
      `;
          
}

function bookTemp(book){
    return  html`
    <ul class="other-books-list">
       <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/mybooks/${book._id}">Details</a>
       </li>
   </ul>
    `
}