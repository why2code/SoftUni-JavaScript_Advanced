import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { currentLikes, deleteAlbum, getAlbumDetails, newLike, userLikes } from '../dataController.js';

export async function showAlbumDetails(ctx){
    const id = ctx.params.id;

    let requests = [
        getAlbumDetails(id),
        currentLikes(id)
    ];

    const user = ctx.user;
    if(user){
        requests.push(userLikes(id, user._id));
    }

    let [album, albumLikes, currUserLikes ] = await Promise.all(requests);

    //let album = await getAlbumDetails(id);
    const isOwner = ctx.user?._id == album._ownerId;
    const isLoggedIn = !!ctx.user;
    
    async function onDelete() {
        await deleteAlbum(id);
        ctx.page.redirect('/dashboard'); 
    }

    async function onLike(){
        let albumId = id;
        await newLike(albumId);
        ctx.page.redirect(`/dashboard/${id}`); 
    }
    

    ctx.render(templDetails(album, isOwner, onDelete, isLoggedIn, albumLikes, currUserLikes, onLike));
}

function templDetails(album, isOwner, onDelete, isLoggedIn, albumLikes, currUserLikes, onLike){
    return html`
         <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${albumLikes}</span></div>

          <!--Edit and Delete are only for creator-->
          ${isOwner ? 
             html`<div id="action-buttons">
                        <!-- <a href="" id="like-btn">Like</a> -->
                        <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
             </div>`
          : 
            html`
            <!-- Added empty div just because test was failing with :nothing. However, test still fails! -->
                ${isLoggedIn && currUserLikes == 0 ? 
               html`
                <div id="action-buttons">
                <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
                </div>`
               :
                nothing
                }`
                
            }
          
        </div>
      </section>
    `;
}