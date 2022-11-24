import {html} from '../../node_modules/lit-html/lit-html.js'
import { getSinglePost } from '../dataController.js'

export async function showPostCommentDetails(ctx){
    const id = ctx.params.id;
    let currPost = await getSinglePost(id);

    ctx.render(postView(currPost));
}

function postView(currPost) {
    return html`
    <div class="comment">
        <div class="header">
            <img src="../../static/profile.png" alt="avatar">
            <p><span>${currPost.author}</span> posted on <time>2020-10-10 12:08:28</time></p>
    
            <p class="post-content">${currPost.content}</p>
        </div>
    </div>
    `;
}