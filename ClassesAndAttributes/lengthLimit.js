class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    #changingString = this.innerString;

    toString() {
        if(this.innerString.length > this.innerLength){
            this.#changingString = this.innerString.substring(0, this.innerLength);
            return `${this.#changingString}...`
        }
        else{
            return this.innerString;
        }
    }

    decrease(num) {
        if(num > this.innerLength){
            num = this.innerLength;
        }
       this.innerLength -= num;
    }

    increase(num){
        this.innerLength += num;
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
