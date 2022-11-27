import { html } from '../../node_modules/lit-html/lit-html.js'
import { singleTheaterDetails, updateTheaterDetails } from '../dataController.js';

export async function showEdit(ctx){

    const id = ctx.params.id;
    let theaterToEdit = await singleTheaterDetails(id);

    ctx.render(templateEditView(theaterToEdit, onEdit));


    async function onEdit(e){
        e.preventDefault();
        
        let form = new FormData(e.target);
        let {title, date, author, description, imageUrl} = Object.fromEntries(form);

        if(!title || !date || !author || !description || !imageUrl){
            return alert("All fields are mandatory, please fill in the data.")
        }
        await updateTheaterDetails(id, title, date, author, description, imageUrl);
        ctx.page.redirect(`/details/${id}`);
    }
}

function templateEditView(theaterToEdit, onEdit){
    return html`
        <section id="editPage">
            <form @submit=${onEdit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${theaterToEdit.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${theaterToEdit.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                     .value=${theaterToEdit.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description" placeholder="Description">${theaterToEdit.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        .value="${theaterToEdit.imageUrl}">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
    `;
}