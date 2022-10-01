function argumentInfo(...params){
    let res = {};
    for(let obj of params){
        let type = typeof(obj);
        console.log(`${type}: ${obj}`)

        if(!res.hasOwnProperty(type)){
            res[type] = 0;
        }
        res[type] += 1;
    }

    let output = "";
    for(let [k,v] of Object.entries(res)){
        output += `${k} = ${v}\n`;
    }
    console.log(output);
}


argumentInfo('cat', 42, function () { console.log('Hello world!'); });
