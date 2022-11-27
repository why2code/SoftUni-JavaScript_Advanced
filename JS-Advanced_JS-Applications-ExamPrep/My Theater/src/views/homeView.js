//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import { getTheaters } from '../dataController.js';

export async function showHome(ctx) {
    let theaters = await getTheaters();

    ctx.render(homeViewGenerator(theaters));
}

function homeViewGenerator(theaters) {
      return html`
          <section class="welcomePage">
            <div id="welcomeMessage">
                <h1>My Theater</h1>
                <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
                    professionals, theatre organizations, theatre universities and theatre lovers all over the world on
                    the 27th of March. This day is a celebration for those who can see the value and importance of the
                    art
                    form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
                    not
                    yet recognised its value to the people and to the individual and have not yet realised its potential
                    for
                    economic growth.</p>
            </div>
            <div id="events">
                <h1>Future Events</h1>
                <div class="theaters-container">
                    ${theaters.length > 0 ?
                    theaters.map(t => theaterTemplate(t))
                    :
                    html`<h4 class="no-event">No Events Yet...</h4>`
                     }
                    <!--Created Events-->
                </div>
            </div>
        </section>
        `;
}

function theaterTemplate(theater){
    return html`
    <div class="eventsInfo">
                        <div class="home-image">
                            <img src=".${theater.imageUrl}">
                        </div>
                        <div class="info">
                            <h4 class="title">${theater.title}</h4>
                            <h6 class="date">${theater.date}</h6>
                            <h6 class="author">${theater.author}</h6>
                            <div class="info-buttons">
                                <a class="btn-details" href="/details/${theater._id}">Details</a>
                            </div>
                        </div>
                    </div>
    `;
}