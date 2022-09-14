function cooker(num, ...params){
    let startingValue = Number(num);

    for(let op of params){
        if(op == "chop"){
            startingValue /= 2; 
        }
        if(op == "dice"){
            startingValue = Math.sqrt(startingValue);
        }
        if(op == "spice"){
            startingValue += 1; 
        }
        if(op == "bake"){
            startingValue *= 3; 
        }
        if(op == "fillet"){
            startingValue = startingValue * 0.80; 
        }

        console.log(startingValue);
    }
}

cooker('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooker('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
