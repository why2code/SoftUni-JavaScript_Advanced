import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
    'addBook' : '/data/books',
    'loadAllBooks' : '/data/books?sortBy=_createdOn%20desc',
    'singleBookDetails' : '/data/books/'
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
export async function addNewBook(title, description,imageUrl,type){
    return await api.post(endpoints.addBook, {title, description,imageUrl,type});
}

export async function loadBooks(){
    return await api.get(endpoints.loadAllBooks);
}

export async function singleBook(id){
    return await api.get(endpoints.singleBookDetails + id);
}

export async function deleteBook(id){
    return await api.del(endpoints.singleBookDetails + id);
}

export async function userBookDetails(userId){
    return await api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function editBook(id, title, description,imageUrl,type){
    return await api.put(endpoints.singleBookDetails + id, {title, description,imageUrl,type});
}