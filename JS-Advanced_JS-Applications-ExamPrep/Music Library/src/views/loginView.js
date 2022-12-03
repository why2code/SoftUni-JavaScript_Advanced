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

  
    await login(email, password);
             
    context.modulateView();
    context.page.redirect('/dashboard');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//INCLUDES TRY-CATCH IF INVALID EMAIL/PASSWORD
function createLoginView(){
    return html`
          <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
        `;
}
