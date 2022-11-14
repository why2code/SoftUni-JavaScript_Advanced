import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

let root = document.getElementById("allCats");

function onLoad() {
    let ul = html`<ul>${cats.map(c => catRoot(c))}</ul>`;
    render(ul, root);

    [...document.querySelectorAll(".showBtn")].forEach(b => b.addEventListener("click", showDetails))
    
}

function catRoot(cat) {
    return html`
                    <li>
                        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                        <div class="info">
                            <button class="showBtn">Show status code</button>
                            <div class="status" style="display: none" id="100">
                                <h4>Status Code: ${cat.statusCode}</h4>
                                <p>${cat.statusMessage}</p>
                            </div>
                        </div>
                    </li>
    `;
}

function showDetails(e) {
    let div = e.target.parentElement.children[1];
    if(div.style.display == "none"){
        div.style.display = "block"
        e.target.textContent = "Hide status code";
    }
    else{
        div.style.display = "none"
        e.target.textContent = "Show status code";

    }

}

onLoad();