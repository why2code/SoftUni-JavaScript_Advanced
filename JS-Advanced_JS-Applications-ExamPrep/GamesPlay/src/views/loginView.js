//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import {login} from '../dataController.js'

let context = null;
export function showLogin(ctx){
    context = ctx;
    ctx.render(createLoginView())
}

async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let {email, password} = Object.fromEntries(formData);

    if(email == '' || password == ""){
        return alert("Email and Password can not be empty fields!")
    }

    try{
        await login(email, password);
    }
    catch (err){
        return alert(err.message);
    }
    context.modulateView();
    context.page.redirect('/');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//INCLUDES TRY-CATCH IF INVALID EMAIL/PASSWORD
function createLoginView(){
    return html`
            <section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
        `;
}
