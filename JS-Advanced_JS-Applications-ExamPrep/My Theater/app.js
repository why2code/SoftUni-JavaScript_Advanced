//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';

//UPDATE MAIN ROOT WHERE HTML IS TO BE UPDATED
const root = document.querySelector('main');

//TEMPLATE JS FOR LOGIN, REGISTER AND LOGOUT FUNCTIONALITY.
//IMPORT ROUTE SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { showLogin } from './src/views/loginView.js';
import { showRegister } from './src/views/registerView.js';
import { showHome } from './src/views/homeView.js';
import { logOut } from './src/dataController.js'
import { showCreate } from './src/views/createView.js';
import { showDetails } from './src/views/detailsView.js';
import { showProfile } from './src/views/profileView.js';
import { showEdit } from './src/views/editView.js';

import * as api from './src/dataController.js';
window.api = api;


//PAGE ROUTING TO LOGIN/REGISTER/LOGOUT + EXAMPLE VIEWS (HOME/CATALOG/ABOUT)
//MIDDLEWARE FUNC ADDED (INCLUDING MODULATE VIEW BASED ON <a> class = "user" || class="guest")
//MODIFY index.html FILE TO ADD CLASS FOR user/guest
page(middleWare);
page('index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/profile', showProfile);
page('/edit/:id', showEdit);

page('/logout', async function () {
    await logOut();
    modulateView();
    page.redirect('/');
});

//----------- Modify the remaining views based on current task -----------




//DO NOT MODIFY BELOW CODE, UNLESS REQUIRED (e.g. adding more decorate functions or amending current modulateView criteria)
page.start();
modulateView();


function middleWare(ctx, next) {
    ctx.render = function (content) {
        render(content, root);
    }
    ctx.modulateView = modulateView;

    //Adding ctx.user so we can easily verify through context
    //Can be used to display dynamic elements based on owner/not owner of an element
    const user = JSON.parse(sessionStorage.getItem("userData"));
    if(user){
        ctx.user = user;
    }

    next();
}


function modulateView() {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData) {
        document.querySelectorAll(".user").forEach(e => e.style.display = "inline-block");
        document.querySelectorAll(".guest").forEach(e => e.style.display = "none");

    }
    else {
        document.querySelectorAll(".user").forEach(e => e.style.display = "none");
        document.querySelectorAll(".guest").forEach(e => e.style.display = "inline-block");

    }
}