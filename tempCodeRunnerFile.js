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

    set(myKey, myVal) {
        const address = this._hash(myKey);
        // console.log('address:', address);
        this.data[address] = [myKey, myVal];
        // console.log('this.data[address]:', this.data[hashed]);
    }

    get(myKey) {
        const address = this._hash(myKey);
        const currentBucket = this.data[address];

        return currentBucket[1];
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log('grapes result', myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log('apples result', myHashTable.get('apples'));
