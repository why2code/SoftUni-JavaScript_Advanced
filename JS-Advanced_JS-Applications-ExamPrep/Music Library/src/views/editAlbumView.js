import { html } from '../../node_modules/lit-html/lit-html.js'
import { editAlbum, getAlbumDetails } from '../dataController.js';

export async function showEditAlbum(ctx){

    const id = ctx.params.id;
    let albumToEdit = await getAlbumDetails(id);

    return ctx.render(templEditAlbum(albumToEdit, onEdit));

    async function onEdit(e){
        e.preventDefault();
        let form = new FormData(e.target);
        let {singer,album, imageUrl, release, label, sales} = Object.fromEntries(form);
        
        if(!singer|| !album || !imageUrl || !release || !label || !sales){
            return alert('All fields are required, please.');
        }

        await editAlbum(id, singer,album, imageUrl, release, label, sales);
        ctx.page.redirect(`/dashboard/${id}`);

    }
}

function templEditAlbum(albumToEdit, onEdit){
    return html`
         <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" .value=${albumToEdit.singer} />
            <input type="text" name="album" id="album-album" .value=${albumToEdit.album} />
            <input type="text" name="imageUrl" id="album-img" .value=${albumToEdit.imageUrl} />
            <input type="text" name="release" id="album-release" .value=${albumToEdit.release} />
            <input type="text" name="label" id="album-label" .value=${albumToEdit.label} />
            <input type="text" name="sales" id="album-sales" .value=${albumToEdit.sales} />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
    `;
}