import { html } from '../../node_modules/lit-html/lit-html.js'
import { createNewTheater } from '../dataController.js';

export async function showCreate(ctx){

    ctx.render(templateCreateView(onCreate));

    async function onCreate(e){
        e.preventDefault();
        
        let form = new FormData(e.target);
        let {title, date, author, description, imageUrl} = Object.fromEntries(form);

        if(!title || !date || !author || !description || !imageUrl){
            return alert("All fields are mandatory, please fill in the data.")
        }
        await createNewTheater(title, date, author, imageUrl, description);
        ctx.page.redirect('/');
    }

}

function templateCreateView(onCreate){
    return html`
      <section id="createPage">
            <form @submit=${onCreate} class="create-form">
                <h1>Create Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
    `;
}