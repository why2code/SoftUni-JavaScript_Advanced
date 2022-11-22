//VERIFY IMPORT ROUTES, HOWEVER ROUTES SHOULD BE ACCURATE IF FILE STRUCTURE NOT MODIFIED
import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
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

    try{
        await login(email, password);
    }
    catch (err){
        return context.render(createLoginView(err.message));
    }
    context.modulateView();
    context.page.redirect('/');
}

//EXAMPLE HTML - NEEDS ADJUSTING BASED ON THE index.html FILE PROVIDED WITH THE TASK
//INCLUDES TRY-CATCH IF INVALID EMAIL/PASSWORD
function createLoginView(errorMsg){
    return html`
         <form @submit=${onSubmit}>
            <div>
                <div class="col-md-4">
                    <div>
                        ${errorMsg ? html`<div>${errorMsg}</div>` : nothing}
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div>
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
        `;
}
