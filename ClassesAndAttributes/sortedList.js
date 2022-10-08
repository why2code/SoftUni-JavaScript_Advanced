class List {
    #myList = [];
    constructor() {
        this.size = this.#myList.length;
    }

    add(value) {
        this.#myList.push(value);
        this.#myList.sort((a, b) => a - b);
        this.size++;
    }
    remove(value) {
        if (value < 0 || value >= this.size) {
            throw new Error("Index provided outside the boundries of the list!");
        }
       this.size--;
        return this.#myList.splice(value, 1);
    }
    get(value) {
        if (value < 0 || value >= this.#myList.length) {
            throw new Error;
        }
        return this.#myList[value];
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));
