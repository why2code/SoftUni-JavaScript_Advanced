class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        let currBook = {
            bookName,
            bookAuthor,
            payed: false
        }
        this.books.push(currBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let foundBook = this.books.find(x => x.bookName === bookName);
        if (!foundBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (foundBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let foundBook = this.books.find(x => x.bookName === bookName);
        if (!foundBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if (foundBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books = this.books.filter(x => x.bookName !== bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let buff = [];
        if (!bookAuthor) {
            buff.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            this.books.forEach(x => buff.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed === true ? "Has Paid" : "Not Paid"}.`));

            return buff.join(`\n`).trim();
        }
        else{
            let printBook = this.books.find(x => x.bookAuthor === bookAuthor);
            if(!printBook){
                return `${bookAuthor} is not in the collection.`
            }
            else{
                let result = [];
                let paid = printBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${printBook.bookName} == ${printBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            }
        }
    }
}


const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));


console.log(library.getStatistics());








