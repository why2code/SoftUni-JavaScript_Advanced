import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { addLike, deleteTheater, likesOfTheater, singleTheaterDetails, userLikesForATheater } from '../dataController.js';

export async function showDetails(ctx) {
    const user = ctx.user;
    const theaterId = ctx.params.id;
    let isOwner = false;
    let canLike = false;


    const requests = [
        singleTheaterDetails(theaterId),
        likesOfTheater(theaterId)
    ];

    if(user !== undefined){
        requests.push(userLikesForATheater(theaterId, user._id))
    }

    const [theaterDetail, theaterLikes, userLikes] = await Promise.all(requests);  
  
    
    if(user !== undefined){
        isOwner = user._id === theaterDetail._ownerId;
        canLike = !isOwner && userLikes == 0;
    }
    

    async function onDelete() {
        await deleteTheater(theaterId);
        ctx.page.redirect('/profile'); 
    }
    
   ctx.render(templateDetailsVeiw(theaterDetail, isOwner, onDelete, theaterLikes, canLike, onLike));
    
    async function onLike(){
        await addLike(theaterId);
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