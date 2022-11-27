import { html } from '../../node_modules/lit-html/lit-html.js'
import { profileTheaters } from '../dataController.js';

export async function showProfile(ctx) {
    const user = ctx.user;
    let assignedEvents = null;

    if (user) {
        assignedEvents = await profileTheaters(user._id);
    }

    ctx.render(templateProfileView(user, assignedEvents));
}

function templateProfileView(user, assignedEvents) {
    return html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="./images/profilePic.png">
            </div>
            <h2>${user.email}</h2>
        </div>
        <div class="board">
            <!--If there are event-->
            ${assignedEvents.length > 0 ?
               assignedEvents.map(e => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=".${e.imageUrl}">
                         <h2>${e.title}</h2>
                         <h6>${e.date}</h6>
                         <a href="/details/${e._id}" class="details-button">Details</a>
                    </div>
                 </div>
                `) 
             :
                html`
                <!--If there are no event-->
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>
            `}
      
        </div>
    </section>
    `;
}