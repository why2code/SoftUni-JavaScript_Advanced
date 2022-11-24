const host = 'http://localhost:3030/';

export async function requester(method, url, body) {
    const options = {
        method,
        headers: {}
    }

    if (body) {
        options.headers['Content-Type'] = 'Application/json';
        options.body = JSON.stringify(body);
    }

    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    try {
        let response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status == 403) {
                sessionStorage.removeItem("accessToken");
            }
            let result = await response.json();
            throw new Error(result.message);
        }
        if (response.status == 204) {
            return await response.json();
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
const del = requester.bind(null, "del");

export {
    get,
    post,
    put,
    del
}