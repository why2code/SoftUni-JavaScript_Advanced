import { html, render } from '../../node_modules/lit-html/lit-html.js'

const nav = document.getElementById("site-header");

export function showNav() {
    let user = sessionStorage.getItem("userData");
    let email = "";

    if(user){
        let parsedUser = JSON.parse(user);
        email = parsedUser.email;

    }
    //THIS IS DONE THROUGH PAGE RENDER, AND ADDED TO A DIFFERENT ELEMENT FROM THE REMAINING PAGES!
    //THIS IS ADDED TO side-header, EVERYTHING ELSE FROM CTX.RENDER IS ADDED TO main;
    render(templShowNav(user, email), nav);
}

function templShowNav(user, email) {
    return html`
             <header id="site-header">
            <!-- Navigation -->
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    <!-- Guest users -->
                    ${user == undefined ? 
                        html` <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`
                    :
                        html` <div id="user">
                        <span>Welcome, ${email}</span>
                        <a class="button" href="/mybooks">My Books</a>
                        <a class="button" href="/addbook">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>`
                    }
                   
                    <!-- Logged-in users -->
                   
                </section>
            </nav>
        </header>
    `;

}