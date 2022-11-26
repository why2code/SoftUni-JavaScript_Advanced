//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../dataController.js'

let context = null;
export function showLogin(ctx) {
    context = ctx;
    ctx.render(createLoginView())
}

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let { email, password } = Object.fromEntries(formData);

    if (email == '' || password == "") {
        return alert("Email and Password can not be empty fields!")
    }

    try{
        await login(email, password);
    }
    catch(err){
        return 
    }

    context.modulateView();
    context.page.redirect('/');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//INCLUDES TRY-CATCH IF INVALID EMAIL/PASSWORD
function createLoginView() {
    return html`
        <section id="loginPage">
            <form @submit=${onSubmit} class="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>
        
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
        
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>
        
                <button class="btn" type="submit">Login</button>
        
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
        `;
}
