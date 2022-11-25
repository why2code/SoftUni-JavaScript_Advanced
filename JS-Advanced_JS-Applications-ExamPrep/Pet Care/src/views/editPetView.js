import { html } from '../../node_modules/lit-html/lit-html.js'
import { editPetById, getSiglePetDetails } from '../dataController.js';

let context = null;
export async function showEditPetView(ctx) {
    context = ctx;
    let petId = ctx.params.id;

    let currPet = await getSiglePetDetails(petId);
    context.render(editCurrentPetDetails(currPet));

   
}

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let { name, breed, age, weight, image } = Object.fromEntries(form);

    if(!name || !breed || !age || !weight || !image){
        return alert('Fields can not be blank!')
    }
    
    let id = context.params.id;
    await editPetById(id, name, breed, age, weight, image);
    context.page.redirect(`/data/pets/${id}`);

}

function editCurrentPetDetails(currPet) {
    return html`
    <section id="editPage">
        <form @submit=${onSubmit} class="editForm">
            <img src="./images/editpage-dog.jpg">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" .value=${currPet.name}>
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" .value=${currPet.breed}>
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" .value=${currPet.age}>
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" .value=${currPet.weight}>
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" .value="${currPet.image}">
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
    `;
}