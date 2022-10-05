function validator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[\w.]+$/g;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidChars = [`<`, `>`, `\\`, `&`, `'`, `"`];


    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!obj.uri.match(uriPattern) && obj.uri !== "*") {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");

    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    let textMsg = obj.message;
    for (let i = 0; i < textMsg.length; i++) {
        if (invalidChars.includes(textMsg[i])) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    return obj;
}

validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
);

