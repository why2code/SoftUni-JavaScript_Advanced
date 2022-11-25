import { html} from '../../node_modules/lit-html/lit-html.js'
import {createNewPet} from '../dataController.js'

let context = null;
export async function showCreatepetView(ctx) {
    context = ctx;
    let petId = ctx.params.id;
    context.render(createNewPetDetails());

}

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let {name, breed, age, weight, image} = Object.fromEntries(form);
    debugger
    await createNewPet(name, breed, age, weight, image);
    context.page.redirect('/');
}


function createNewPetDetails() {
    return html`
                <form @submit=${onSubmit} class="createForm">
                    <img src="./images/cat-create.jpg">
                    <div>
                        <h2>Create PetPal</h2>
                        <div class="name">
                            <label for="name">Name:</label>
                            <input name="name" id="name" type="text" placeholder="Max">
                        </div>
                        <div class="breed">
                            <label for="breed">Breed:</label>
                            <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                        </div>
                        <div class="Age">
                            <label for="age">Age:</label>
                            <input name="age" id="age" type="text" placeholder="2 years">
                        </div>
                        <div class="weight">
                            <label for="weight">Weight:</label>
                            <input name="weight" id="weight" type="text" placeholder="5kg">
                        </div>
                        <div class="image">
                            <label for="image">Image:</label>
                            <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                        </div>
                        <button class="btn" type="submit">Create Pet</button>
                    </div>
                </form>
        
        `;
}