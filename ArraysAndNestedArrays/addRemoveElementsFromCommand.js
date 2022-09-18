function addRemoveElement(commands){
        let counter = Number(1);
        let res = [];
        
        commands.forEach(currComm => {
            currComm === "add" ? res.push(Number(counter)) : res.pop(Number(counter));
            counter++;
        });
        
        console.log(res.length == 0 ? "Empty" : res.join('\n'));
}

addRemoveElement(['add', 
'add', 
'add', 
'add']
);

console.log('----------------------');
addRemoveElement(['add', 
'add', 
'remove', 
'add', 
'add']
);

console.log('----------------------');
addRemoveElement(['remove', 
'remove', 
'remove']
);