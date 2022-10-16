(function solve() {

    //let str = 'my string';

    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? `${this}` : str + this;
    };

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? `${this}` : this + str
    };

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return `${this}`
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        let textSplitBySpace = this.split(' ');
        while ((textSplitBySpace.join(' ') + '...').length > n) {
            if (textSplitBySpace.length > 1) {
                textSplitBySpace.pop();
            } else {
                textSplitBySpace[0] = textSplitBySpace[0].slice(0, n - 3)
            }
        }
        return textSplitBySpace.join(' ').trim() + '...';

    };

    String.format = function (str, ...params) {
        params.forEach((word, index) => str = str.replace(`{${index}}`.toString(), word))
        return str;
    }

    // str = str.ensureStart('my');
    // console.log(str)
    // str = str.ensureStart('hello ');
    // console.log(str)
    // str = str.truncate(16);
    // str = str.truncate(14);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox', 'quick', 'brown');
    // str = String.format('jumps {0} {1}','dog');

})();




