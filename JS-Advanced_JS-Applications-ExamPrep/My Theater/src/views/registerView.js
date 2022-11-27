//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import {register} from '../dataController.js'

let context = null;
export function showRegister(ctx){
    context = ctx;
    ctx.render(createRegisterView())
}

async function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let {email, password, repeatPassword} = Object.fromEntries(formData);

    //----------- Modify this validation according to the current task -----------
    if(email == '' || password == "" || repeatPassword == ""){
        return alert("Email, Password and Repeat password can not be empty fields!")
    }

    if(password !== repeatPassword){
        return alert("Passwords don\'t match");
    }

    await register(email, password);
    context.modulateView();
    context.page.redirect('/');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//----------- Includes error message as per validation of password -----------
function createRegisterView(){
    return html`
        <section id="registerPage">
            <form @submit=${onSubmit} class="registerForm">
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
        `;
}