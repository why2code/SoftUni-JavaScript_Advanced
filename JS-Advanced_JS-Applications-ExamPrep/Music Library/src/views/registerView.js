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
    let {email, password, ["re-password"]:rePass} = Object.fromEntries(formData);

    //----------- Modify this validation according to the current task -----------
    if(email == '' || password == "" || rePass == ""){
        return alert("Email, Password and Repeat password can not be empty fields!")
    }

    if(password !== rePass){
       return alert("Passwords don\'t match");
    }

    await register(email, password);
    context.modulateView();
    context.page.redirect('/dashboard');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//----------- Includes error message as per validation of password -----------
function createRegisterView(msg){
    return html`
        <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
        `;
}