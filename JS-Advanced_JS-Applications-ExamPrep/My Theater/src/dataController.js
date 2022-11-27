import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
    'getTheaters' : '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    'newTheater' : '/data/theaters',
    'theaterDetails' : '/data/theaters/',
    'deleteTheater' : '/data/theaters/',
    'addLike' : '/data/likes'
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
export async function getTheaters(){
    return api.get(endpoints.getTheaters);
}

export async function createNewTheater(title, date, author, imageUrl, description){
    return api.post(endpoints.newTheater, {title, date, author, imageUrl, description});
}

export async function singleTheaterDetails(id){
    return api.get(endpoints.theaterDetails + id);
}

export async function deleteTheater(id){
    return api.del(endpoints.theaterDetails + id);
}

export async function profileTheaters(userId){
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function updateTheaterDetails(id, title, date, author, description, imageUrl){
    return api.put(endpoints.theaterDetails + id, {title, date, author, description, imageUrl});
}

export async function addLike(id){
    return api.post(endpoints.addLike, {id});
}

export async function likesOfTheater(theaterId){
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function userLikesForATheater(theaterId, userId){
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}