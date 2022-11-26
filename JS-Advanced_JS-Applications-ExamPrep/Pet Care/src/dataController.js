import * as api from './api.js';

//MODIFY ENDPOINTS BY ADDING NEW ROUTS AS PER CURRENT TASK
const endpoints = {
    'login' : 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'getAllPets': 'data/pets?sortBy=_createdOn%20desc&distinct=name',
    'singlePet' : 'data/pets/'
    
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

export async function getAllPets(){
    let res = await api.get(endpoints.getAllPets);
    return res;
}

export async function getSiglePetDetails(id){
    return api.get(endpoints.singlePet + id);
}

export async function deleteById(id){
    return api.del(endpoints.singlePet + id);
}

export async function editPetById(id, name, breed, age, weight, image){
    return await api.put(endpoints.singlePet + id, {name, breed, age, weight, image});
}

export async function createNewPet(name, breed, age, weight, image){
    return await api.post(endpoints.singlePet, {name, breed, age, weight, image});
}

//ADD OTHER FUNCTIONS BASED ON CURRENT TASK...
export async function getDonations(petId){
    return api.get(`data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function getOwnDonation(petId, userId){
    return api.get(`data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function donate(petId){
    return api.post(`data/donation/`, {petId});
}