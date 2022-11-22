const root = document.querySelector('main');
import { html, render } from '../../../node_modules/lit-html/lit-html.js'

export function showCatalog() {
    render(html`<h2>About Catalog</h2>`, root);
}
