import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'getTopics': 'jsonstore/collections/myboard/posts'
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
export async function createNewPost(title, author, content){
    await api.post(endpoints.getTopics, {title, author, content});
}

export async function getAllPosts(){
    let res = await api.get(endpoints.getTopics);
    return res;
}

export async function getSinglePost(id){
    let res = await api.get(endpoints.getTopics + '/' + id);
    return res;
}