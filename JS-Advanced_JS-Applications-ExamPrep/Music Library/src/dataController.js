import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
    'getAlbums' : '/data/albums?sortBy=_createdOn%20desc',
    'createAlbum' : '/data/albums',
    'albumDetails' : '/data/albums/'
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

export async function getAlbums(){
    return await api.get(endpoints.getAlbums);
}

export async function createAlbum(singer,album, imageUrl, release, label, sales){
    return await api.post(endpoints.createAlbum, {singer,album, imageUrl, release, label, sales});
}

export async function getAlbumDetails(id){
    return await api.get(endpoints.albumDetails + id);
}

export async function deleteAlbum(id){
    return await api.del(endpoints.albumDetails + id);
}

export async function editAlbum(id, singer,album, imageUrl, release, label, sales){
    return await api.put(endpoints.albumDetails + id, {singer,album, imageUrl, release, label, sales});
}

export async function currentLikes(albumId){
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}

export async function newLike(albumId){
    return await api.post('/data/likes', {albumId});
}

export async function userLikes(albumId, userId){
    return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}