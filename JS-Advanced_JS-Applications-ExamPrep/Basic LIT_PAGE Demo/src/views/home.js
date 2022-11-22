const root = document.querySelector('main');
import {html, render} from '../../../node_modules/lit-html/lit-html.js'

export function showHome(){
     render(html`<h2>About Home</h2>`, root);
}