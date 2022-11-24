//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { createNewPost, getAllPosts, getSinglePost } from '../dataController.js'

let context = null;

export async function showHomeViewPage(ctx) {
    context = ctx;
    let listedPosts = await getAllPosts();
    ctx.render(mainFormView(listedPosts));
}


function mainFormView(listedPosts) {
    return html`
    <div class="new-topic-border">
        <div class="header-background">
            <span>New Topic</span>
        </div>
        <form @submit=${onSubmit}>
            <div class="new-topic-title">
                <label for="topicName">Title <span class="red">*</span></label>
                <input type="text" name="topicName" id="topicName">
            </div>
            <div class="new-topic-title">
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <div class="new-topic-content">
                <label for="postText">Post <span class="red">*</span></label>
                <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
            </div>
            <div class="new-topic-buttons">
                <button class="cancel">Cancel</button>
                <button class="public">Post</button>
            </div>
    
        </form>
    </div>
    <div class="topic-title">
        <div class="topic-container">
            ${listedPosts ? html`${Object.values(listedPosts).map(p => postsGenerator(p))}` : nothing}
        </div>
    </div>
      `;
}

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);

    if (document.activeElement.className == "cancel") {
        e.target.reset();
    }
    else {
        let { topicName, username, postText } = Object.fromEntries(form);
        if (!topicName || !username || !postText) {
            return alert("All fiends must not be filled!")
        }

        await createNewPost(topicName, username, postText);
        e.target.reset();
        context.page.redirect('/');
    }
}

function postsGenerator(p) {
    return html`
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href=${`/${p._id}`} class="normal">
                    <h2>${p.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${Date.now()}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${p.author}</span></p>
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
        `;

};


