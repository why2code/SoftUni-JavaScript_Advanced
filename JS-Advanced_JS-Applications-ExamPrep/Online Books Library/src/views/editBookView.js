import { html } from '../../node_modules/lit-html/lit-html.js'
import { editBook, singleBook } from '../dataController.js';

export async function showEditbookView(ctx){
    const bookId = ctx.params.id;
    const book = await singleBook(bookId);

    ctx.render(templEditBook(book, onEditBook, optionSelector));

    async function onEditBook(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let {title, description, imageUrl, type} = Object.fromEntries(formData);
    
        //----------- Modify this validation according to the current task -----------
        if(!title || !description || !imageUrl || !type){
            return alert("All fields are required!")
        }

        await editBook(bookId, title, description, imageUrl, type);
        ctx.page.redirect(`/mybooks/${bookId}`);
    }


    function optionSelector(option, bookType){
        return html`
            ${option == bookType ? 
                html`<option value="${option}" selected>${bookType}</option>`
            :
                html`<option value="${option}">${option}</option>`
            }
                `;
    }
}

function templEditBook(book, onEditBook, optionSelector){
    return html`
           <section id="edit-page" class="edit">
            <form @submit=${onEditBook} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value=${book.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${book.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value=${book.type}>
                                ${optionSelector("Fiction", book.type)}
                                ${optionSelector("Romance", book.type)}
                                ${optionSelector("Mistery", book.type)}
                                ${optionSelector("Clasic", book.type)}
                                ${optionSelector("Other", book.type)}
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
    `;
}

