//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'


export function showCatalog(ctx){
    ctx.render(catalogViewGenerator())
}

function catalogViewGenerator(){
    return html`
        <h2>This is the Catalog Page - only visible to logged users!</h2>
        `;
}