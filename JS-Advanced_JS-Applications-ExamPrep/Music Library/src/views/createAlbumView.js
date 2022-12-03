import { html } from '../../node_modules/lit-html/lit-html.js'
import { createAlbum } from '../dataController.js';

export async function showAlbumCreate(ctx){
    
    ctx.render(templCreateAlbum(onCreate));

    async function onCreate(e){
        e.preventDefault();

        let form = new FormData(e.target);
        let {singer,album, imageUrl, release, label, sales} = Object.fromEntries(form);
        
        if(!singer|| !album || !imageUrl || !release || !label || !sales){
            return alert('All fields are required, please.');
        }

        await createAlbum(singer,album, imageUrl, release, label, sales);
        ctx.page.redirect('/dashboard');

    }
}

function templCreateAlbum(onCreate){
    return html`
         <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
    `;
}