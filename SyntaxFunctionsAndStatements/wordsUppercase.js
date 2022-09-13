function upperCase(text){
    return text.match(/\w+/g).join(", ").toUpperCase();
}

console.log(upperCase('Hi, how are you?'));