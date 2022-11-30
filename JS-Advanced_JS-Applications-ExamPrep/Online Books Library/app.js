//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';

//UPDATE MAIN ROOT WHERE HTML IS TO BE UPDATED
const root = document.querySelector("main");

//TEMPLATE JS FOR LOGIN, REGISTER AND LOGOUT FUNCTIONALITY.
//IMPORT ROUTE SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { showLogin } from './src/views/loginView.js';
import { showRegister } from './src/views/registerView.js';
import { showHome } from './src/views/homeView.js';
import { logOut } from './src/dataController.js'
import { showNav } from './src/views/navView.js';
import { showAddBook } from './src/views/addBookView.js';
import { showBookDetails } from './src/views/detailsView.js';
import { showUserBooks } from './src/views/userBooksView.js';
import { showEditbookView } from './src/views/editBookView.js';




//PAGE ROUTING TO LOGIN/REGISTER/LOGOUT + EXAMPLE VIEWS (HOME/CATALOG/ABOUT)
//MIDDLEWARE FUNC ADDED (INCLUDING MODULATE VIEW BASED ON <a> class = "user" || class="guest")
//MODIFY index.html FILE TO ADD CLASS FOR user/guest
page(middleWare);
page('index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/addbook', showAddBook);
page('/mybooks', showUserBooks);
page('/mybooks/:id', showBookDetails);
page('/edit/:id', showEditbookView);


page('/logout', async function () {
    await logOut();
    showNav();
    page.redirect('/');
});

//----------- Modify the remaining views based on current task -----------


//DO NOT MODIFY BELOW CODE, UNLESS REQUIRED (e.g. adding more decorate functions or amending current modulateView criteria)
showNav();
page.start();


function middleWare(ctx, next) {
    ctx.render = function (content) {
        render(content, root);
    }

    ctx.updateNav = showNav;

    //Adding ctx.user so we can easily verify through context
    //Can be used to display dynamic elements based on owner/not owner of an element
    const user = JSON.parse(sessionStorage.getItem("userData"));
    if(user){
        ctx.user = user;
    }


    next();
}


// function modulateView() {
//     const userData = JSON.parse(sessionStorage.getItem("userData"));
//     if (userData) {
//         document.querySelectorAll("#user").forEach(b => b.style.display = "inline-block");
//         document.querySelectorAll("#guest").forEach(b => b.style.display = "none");
       
//     }
//     else {
//         document.querySelectorAll("#user").forEach(b => b.style.display = "none");
//         document.querySelectorAll("#guest").forEach(b => b.style.display = "inline-block");
//     }
// }


