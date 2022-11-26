import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { deleteById, donate, getDonations, getOwnDonation, getSiglePetDetails } from '../dataController.js';

export async function showPetDetails(ctx) {
    const id = ctx.params.id;

    const requests = [
        getSiglePetDetails(id),
        getDonations(id)
    ];

    const hasUser = ctx.user;
    if (hasUser !== undefined) {
        requests.push(getOwnDonation(id, hasUser._id))
    }

    const [pet, donations, hasDonation] = await Promise.all(requests);

    let isOwner = hasUser && ctx.user._id == pet._ownerId;
    const canDonate = !isOwner && hasDonation == 0;
    
    ctx.render(detailsTemplate(pet, donations * 100, hasUser, canDonate, isOwner, onDelete, onEdit, onDonate));

    async function onDelete() {
        const delConfirmation = confirm("Are you sure you would like to delete this record?");
        if (delConfirmation) {
            await deleteById(pet._id);
            ctx.page.redirect('/');
        }
    }

    function onEdit() {
        ctx.page.redirect(`/create/${pet._id}`)
    }

    async function onDonate(){
       await donate(id);
       ctx.page.redirect(`/data/pets/${id}`);
    }
}

function petControls(pet, hasUser, canDonate, isOwner, onDelete, onEdit, onDonate) {
    if (hasUser == false) {
        return nothing;
    }

    if (canDonate) {
        return html`
        <div class="actionBtn">
            <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
        </div>`;
    }
    if (isOwner) {
        return html`
        <div class="actionBtn">
            <a @click=${onEdit} href="/create/${pet._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>
        `;
    }
}

function detailsTemplate(pet, donations, hasUser, canDonate, isOwner, onDelete, onEdit, onDonate) {
    return html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${pet.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${donations}$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${petControls(pet, hasUser, canDonate, isOwner, onDelete, onEdit, onDonate)}
            </div>
        </div>
    </section>
    `;
}