//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html} from '../../node_modules/lit-html/lit-html.js'
import { getAllPets } from '../dataController.js';


export async function showDashboard(ctx) {
    let allPets = await getAllPets();
    ctx.render(catalogViewGenerator(allPets))
}

const catalogViewGenerator = (allPets) => 
            html`
            <section id="dashboard">
                <h2 class="dashboard-title">Services for every animal</h2>
                <div class="animals-dashboard">
                ${allPets.length == 0 ? html`
                    <div>
                    <p class="no-pets">No pets in dashboard</p>
                    </div>`
                : allPets.map(petBoardGenerator)}
                </div>
            </section>`;
                      


const petBoardGenerator = (pet) =>
     html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${pet.image}">
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
        <div class="action">
            <a class="btn" href="data/pets/${pet._id}">Details</a> 
        </div>
    </div>`;
