import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { addLike, deleteTheater, likesOfTheater, singleTheaterDetails, userLikesForATheater } from '../dataController.js';

export async function showDetails(ctx) {
    const user = ctx.user;
    const id = ctx.params.id;
    let isOwner = false;


    const requests = [
        singleTheaterDetails(id),
        likesOfTheater(id)
    ];

    if(user !== undefined){
        requests.push(userLikesForATheater(id, user._id))
    }

    const [theaterDetail, theaterLikes, userLikes] = await Promise.all(requests);  
  
    isOwner = user._id === theaterDetail._ownerId;
    let canLike = !isOwner && userLikes == 0;
    

    async function onDelete() {
        await deleteTheater(id);
        ctx.page.redirect('/profile'); 
    }
    
   ctx.render(templateDetailsVeiw(theaterDetail, isOwner, onDelete, theaterLikes, canLike, onLike));
    
    async function onLike(){
        await addLike(id);
        ctx.page.redirect(`/details/${theaterDetail._id}`);
    }
}

function templateDetailsVeiw(theaterDetail, isOwner, onDelete, theaterLikes, canLike, onLike) {
    return html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${theaterDetail.title}</h1>
                <div>
                    <img src=".${theaterDetail.imageUrl}" />
                </div>
            </div>
    
            <div class="details">
                <h3>Theater Description</h3>
                <p>${theaterDetail.description}</p>
                <h4>Date: ${theaterDetail.date}</h4>
                <h4>Author: ${theaterDetail.author}</h4>
                ${isOwner ?
                    html`
                         <div class="buttons">
                         <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                         <a class="btn-edit" href="/edit/${theaterDetail._id}">Edit</a>
                         </div>`
                    :
                        canLike ?
                        html`
                        <div class="buttons">
                         <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>
                         </div>`
                        : nothing
                    }
                                  
                <p class="likes">Likes: ${theaterLikes}</p>
                                                               
            </div>
        </div>
    </section>
    `;
}