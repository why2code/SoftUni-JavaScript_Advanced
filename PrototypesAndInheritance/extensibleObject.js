function extensibleObject() {
    return {
        extend(obj) {
            for (x in obj) {
                if (typeof obj[x] === 'function') {
                    Object.getPrototypeOf(this)[x] = obj[x];
                } else {
                    this[x] = obj[x];
                }
            }
        }
    }
}

const myObj = extensibleObject();
