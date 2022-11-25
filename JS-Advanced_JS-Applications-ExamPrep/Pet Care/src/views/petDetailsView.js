import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { deleteById, getSiglePetDetails } from '../dataController.js';

export async function showPetDetails(ctx) {
    const id = ctx.params.id;
    let isOwner = false;
    let isLogged = false;

    let currPetDetails = await getSiglePetDetails(id);
    let ownerId = currPetDetails._ownerId;

    const user = ctx.user;
    if (user !== undefined) {
        isLogged = true;
        isOwner = user._id === ownerId;
    }

    ctx.render(detailsTemplate(currPetDetails, isLogged, isOwner, onDelete, onEdit));

    async function onDelete(){
        const delConfirmation = confirm("Are you sure you would like to delete this record?");
        if(delConfirmation){
            await deleteById(currPetDetails._id);
            ctx.page.redirect('/');
        }
    }

    function onEdit(){
        ctx.page.redirect(`/create/${currPetDetails._id}`)
    }
}


function detailsTemplate(currPetDetails, isLogged, isOwner, onDelete, onEdit) {
    return html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${currPetDetails.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${currPetDetails.name}</h1>
                    <h3>Breed: ${currPetDetails.breed}</h3>
                    <h4>Age: ${currPetDetails.age}</h4>
                    <h4>Weight: ${currPetDetails.weight}</h4>
                    <h4 class="donation">Donation: 0$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${isLogged ? 
                html`
                <div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
                    ${isOwner ? 
                    html`
                     <a @click=${onEdit} href="/create/${currPetDetails._id}" class="edit">Edit</a>
                     <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    `
                    :
                    html`
                    <!--(Bonus Part) Only for no creator and user-->
                    <a href="#" class="donate">Donate</a>
                    `}
                    
                </div>
                ` 
                :
                nothing};
            </div>
        </div>
    </section>
    `;
}