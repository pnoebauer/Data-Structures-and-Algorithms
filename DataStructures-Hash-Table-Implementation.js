class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // console.log('hash', {
            //     hash,
            //     charCodeAt: key.charCodeAt(i),
            //     mult: key.charCodeAt(i) * i,
            //     adder: hash + key.charCodeAt(i) * i,
            //     res: (hash + key.charCodeAt(i) * i) % this.data.length,
            // });
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // get add() {
    //     return this.a;
    // }

    // set add(arg1) {
    //     this.a = arg1;
    // }

    set(myKey, myVal) {
        const hashed = this._hash(myKey);
        // console.log('hashed:', hashed);
        this.data[hashed] = [myKey, myVal];
        // console.log('this.data[hashed]:', this.data[hashed]);
    }

    get(myKey) {
        // return this.data[this._hash(myKey)]; // return entire entry
        return this.data[this._hash(myKey)][1]; // return value
    }
}

// const myHashTable = new HashTable(50);
// const res = myHashTable.add;
// console.log(res);
// myHashTable.add = 5;
// const res2 = myHashTable.add;
// console.log(res2);

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log('grapes result', myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log('apples result', myHashTable.get('apples'));
