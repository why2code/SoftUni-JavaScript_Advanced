//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'

export function showAbout(ctx){
    ctx.render(aboutViewGenerator())
}

function aboutViewGenerator(){
    return html`
        <h2>About Page</h2>
        `;
}