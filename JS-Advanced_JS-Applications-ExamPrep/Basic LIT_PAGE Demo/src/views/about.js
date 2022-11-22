const root = document.querySelector('main');
import {html, render} from '../../../node_modules/lit-html/lit-html.js'

export function showAbout(){
    render(html`<h2>About Page</h2>`, root);
}