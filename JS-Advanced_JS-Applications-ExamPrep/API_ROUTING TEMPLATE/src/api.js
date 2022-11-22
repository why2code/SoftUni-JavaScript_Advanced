const host = 'http://localhost:3030/';

export async function requester(method, url, body) {
    const options = {
        method,
        headers: {}  
    }

    if (body !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const user = sessionStorage.getItem("userData");
    if (user) {
        //JSON.parse(sessionStorage.getItem("userData")).accessToken
        const accessToken = JSON.parse(user).accessToken; 
        options.headers['X-Authorization'] = accessToken;
    }

    try {
        let response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status == 403) {
                sessionStorage.removeItem("userData");
            }
            let result = await response.json();
            throw new Error(result.message);
        }
        if (response.status == 204) {
            return response;
        }
        return await response.json();
    }
    catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = requester.bind(null, "get");
const post = requester.bind(null, "post");
const put = requester.bind(null, "put");
const del = requester.bind(null, "delete");

export {
    get,
    post,
    put,
    del
}