function validator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
    let invalidChars = [`<`, `>`, `\\`, `&`, `'`, `"`];
    let uriPattern = /^[\w.]+$/g;

    console.log('hi');

    
    if (!validMethods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    };
    
    
}

validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );

