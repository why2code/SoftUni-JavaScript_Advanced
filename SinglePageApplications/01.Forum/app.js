//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';

//UPDATE MAIN ROOT WHERE HTML IS TO BE UPDATED
const root = document.querySelector("main");

//TEMPLATE JS FOR LOGIN, REGISTER AND LOGOUT FUNCTIONALITY.
//IMPORT ROUTE SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED



// ----------- Modify this structure of VIEW models based on the current task -----------
import { showHomeViewPage } from './src/views/homeView.js';
import {showPostCommentDetails} from './src/views/postView.js'

import * as api from './src/api.js'
import {getAllPosts} from './src/dataController.js'
window.api = api;
window.getAllPosts = getAllPosts;
//PAGE ROUTING TO LOGIN/REGISTER/LOGOUT + EXAMPLE VIEWS (HOME/CATALOG/ABOUT)
//MIDDLEWARE FUNC ADDED (INCLUDING MODULATE VIEW BASED ON <a> class = "user" || class="guest")
//MODIFY index.html FILE TO ADD CLASS FOR user/guest
page(middleWare);
page('index.html', '/');
page('/', showHomeViewPage);
page('/:id', showPostCommentDetails);



//----------- Modify the remaining views based on current task -----------



//DO NOT MODIFY BELOW CODE, UNLESS REQUIRED (e.g. adding more decorate functions or amending current modulateView criteria)
window.onload = () =>{
    page.start();
    page.redirect('/');
}
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