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
import { showDashboard } from './src/views/dashboardView.js';
import { showAlbumCreate } from './src/views/createAlbumView.js';
import { showAlbumDetails } from './src/views/detailsView.js';
import { showEditAlbum } from './src/views/editAlbumView.js';




//PAGE ROUTING TO LOGIN/REGISTER/LOGOUT + EXAMPLE VIEWS (HOME/CATALOG/ABOUT)
//MIDDLEWARE FUNC ADDED (INCLUDING MODULATE VIEW BASED ON <a> class = "user" || class="guest")
//MODIFY index.html FILE TO ADD CLASS FOR user/guest
page(middleWare);
page('index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/dashboard/:id', showAlbumDetails);
page('/addalbum', showAlbumCreate);
page('/edit/:id', showEditAlbum);

page('/logout', async function () {
    await logOut();
    modulateView();
    page.redirect('/dashboard');
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
        document.querySelectorAll(".loggedUser").forEach(e => e.style.display = "inline-block");
        document.querySelectorAll(".guestUser").forEach(e => e.style.display = "none");

    }
    else {
        document.querySelectorAll(".loggedUser").forEach(e => e.style.display = "none");
        document.querySelectorAll(".guestUser").forEach(e => e.style.display = "inline-block");

    }
}


////ALTERNATIVE FOR WHEN NAV ALREADY HAS CLASS ADDED TO IT.
////ALLOWS TO ADD CUSTOM TEXT IN THE HEADER BASED ON LOGGED USER.
// function updateNav() {
//     const user = JSON.parse(sessionStorage.getItem('userData'));

//     if (user) {
//         document.getElementById('user').style.display = 'block';
//         document.getElementById('guest').style.display = 'none';
//         document.querySelector('#user span').textContent = `Welcome, ${user.email}`;
//     } else {
//         document.getElementById('user').style.display = 'none';
//         document.getElementById('guest').style.display = 'block';
//     }
// }