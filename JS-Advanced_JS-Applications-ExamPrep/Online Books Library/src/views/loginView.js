//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../dataController.js'

export function showLogin(ctx) {

    ctx.render(createLoginView(onSubmit))


    async function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let { email, password } = Object.fromEntries(formData);

        if (email == '' || password == "") {
            return alert("Email and Password can not be empty fields!")
        }


        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}



//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//INCLUDES TRY-CATCH IF INVALID EMAIL/PASSWORD
function createLoginView(onSubmit) {
    return html`
        <section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
        `;
}
