// 15 --> 3 --> 2

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    prepend(prependValue) {
        const priorHeadNode = this.head;

        this.head = {
            value: prependValue,
            next: priorHeadNode,
        };
        // const prependNode = {
        //     value: prependValue,
        //     next: null,
        // };
        // prependNode.next = this.head;
        // this.head = prependNode;

        this.length++;
    }

    insert(insertValue, position) {
        if (position >= this.length - 1) {
            const insertNode = {
                value: insertValue,
                next: null,
            };
            this.tail.next = insertNode;
            this.tail = insertNode;
            return this;
        }

        let i = 0;
        let currentNode = this.head;
        let nextNode = this.head.next;

        for (let i = 0; i < position; i++) {
            // console.dir({ currentNode, i }, { depth: null, colors: true });
            currentNode = currentNode.next;

            // currentNode = nextNode;
            // nextNode = currentNode.next;
        }

        // // currentNode.next = {value: insertValue, next: }
        // const insertNode = {value: insertValue, next: null}
        // insertNode.next = currentNode.next

        const insertNode = { value: insertValue, next: null };
        insertNode.next = currentNode.next;

        currentNode.next = insertNode;

        // console.dir({ finalNode: currentNode }, { depth: null, colors: true });
        // console.dir({ nextNode, currentNode }, { depth: null, colors: true });

        this.length++;
    }

    append(appendValue) {
        const appendNode = {
            value: appendValue,
            next: null,
        };
        this.tail.next = appendNode;
        this.tail = appendNode;

        // this.tail = appendNode;
        // let currentNode = this.head;
        // let next = this.head.next;
        // let value = this.head.value;

        // while (next) {
        //     currentNode = next;
        //     next = currentNode.next;
        // }

        // // Now currentNode is the last node
        // currentNode.next = appendNode; // Connect the last node to new tail
        // this.tail = appendNode;
        this.length++;
    }

    // calculate length
    getLength() {
        let length = 1;

        // let currentNode = this.head.next;
        // let nextNode = this.head.next;
        // while (nextNode) {
        //     console.log('nextNode', nextNode)
        //     nextNode = currentNode.next;
        //     currentNode = nextNode;
        //     length++;
        // }
        let nextNode = this.head.next;
        while (nextNode) {
            // console.log('nextNode', nextNode)
            nextNode = nextNode.next;
            length++;
        }

        return length;
    }
}

const linkedList = new LinkedList(15);

// linkedList.prepend(3);
linkedList.append(5);
// linkedList.append(6);

// linkedList.insert(20, 1);

linkedList.insert(16, 0);

// linkedList.insert(18, linkedList.length);

// linkedList.append(3);
// linkedList.append(3);
// console.dir(linkedList, { depth: null, colors: true });

// linkedList.append(2);
// linkedList.append(4);
// linkedList.append(5);

// // linkedList.prepend(12);
console.dir(linkedList, { depth: null, colors: true });

// console.log('linkedListgetLength', linkedList.getLength());
