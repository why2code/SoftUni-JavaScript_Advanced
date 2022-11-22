import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
}

export async function login(email, password){
    let user = await api.post(endpoints.login, {email, password});
    sessionStorage.setItem("userData", JSON.stringify(user));
}

export async function register(email, password){
    let user = await api.post(endpoints.register, {email, password});
    sessionStorage.setItem("userData", JSON.stringify(user));
}

export async function logOut(){
    await api.get(endpoints.logout);
    sessionStorage.removeItem("userData");
}

//ADD OTHER FUNCTIONS BASED ON CURRENT TASK...