import * as api from './api.js'

const router = {
    'books': 'jsonstore/collections/books'
}

export async function getBooks(){
    let result = await api.get(router.books);
    return result;
}

