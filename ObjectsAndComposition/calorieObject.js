function objectGenerator(input){
    let obj = {};

    for(let i = 0; i < input.length; i+=2){
          
            let propValue = Number(input[i + 1]);
            obj[input[i]] = propValue;
           
    }

    console.log(obj)
}

objectGenerator(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);