//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html, nothing } from '../../node_modules/lit-html/lit-html.js'

let context = null;
export function showHome(ctx) {
    context = ctx;
    let user = ctx.user;
    ctx.render(homeViewGenerator(user))
}

function homeViewGenerator(userLoggedInOrNot) {
      return html`
        <h2>This is the Home Page</h2>
        <div>
            <p>Below Area displays content based on user being logged in or not!</p>
            ${userLoggedInOrNot ? 
            html`
            <div>
                 <p>You are seeing this paragraph, as you are logged in!</p>
                 <ul>
                     <li>Sensitive item 1...</li>
                     <li>Sensitive item 2...</li>
                     <li>Sensitive item 3...</li>
                 </ul>
            </div>` 
            : html`<p>No user logged in - nothing to see here buddy! :) </p>` }
        </div>
        `;
}