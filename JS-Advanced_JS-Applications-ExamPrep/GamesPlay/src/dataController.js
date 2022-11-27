import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
    'getAllGames' : '/data/games?sortBy=_createdOn%20desc&distinct=category',
    'catalogueGames' : '/data/games?sortBy=_createdOn%20desc',
    'newGame' : '/data/games',
    'singleGameDetails' : '/data/games/',
    'createComment' : '/data/comments'
    
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
export async function getAllGames(){
    return api.get(endpoints.getAllGames);
}

export async function getCatalogueGames(){
    return api.get(endpoints.catalogueGames);
}

export async function newGame(title, category, maxLevel, imageUrl, summary){
   return api.post(endpoints.newGame, {title, category, maxLevel, imageUrl, summary});
}

export async function singleGameDetails(id){
    return api.get(endpoints.singleGameDetails + id);
 }

 export async function deleteGame(id){
    return api.del(endpoints.singleGameDetails + id);
 }

 export async function updateExistingGame(id, title, category, maxLevel, imageUrl, summary){
    return api.put(endpoints.singleGameDetails + id, {title, category, maxLevel, imageUrl, summary});
 }

 export async function loadAllComments(gameId){
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
 }

 export async function createComment(gameId, comment){
    return api.post(endpoints.createComment, {gameId, comment});
 }