//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../dataController.js'

let context = null;
export function showRegister(ctx) {
    context = ctx;
    ctx.render(createRegisterView())
}

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let { email, password, ["confirm-password"]:rePass } = Object.fromEntries(formData);

    //----------- Modify this validation according to the current task -----------
    if (email == '' || password == "" || rePass == "") {
        return alert("Email, Password and Repeat password can not be empty fields!")
    }

    if (password !== rePass) {
        return alert("Passwords don\'t match");
    }

    await register(email, password);
    context.modulateView();
    context.page.redirect('/');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//----------- Includes error message as per validation of password -----------
function createRegisterView() {
    return html`
        <section id="register-page" class="content auth">
            <form @submit=${onSubmit} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>
        
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">
        
                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">
        
                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">
        
                    <input class="btn submit" type="submit" value="Register">
        
                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
        `;
}