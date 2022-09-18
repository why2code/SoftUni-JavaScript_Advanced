function printNthElement(arr, step){
    let res = [];
   for(let i = 0; i <= arr.length; i+= step){
        res.push(arr[i]);
   }

   return res;
}

console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(printNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
));