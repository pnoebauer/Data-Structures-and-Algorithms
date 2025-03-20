// 15 --> 3 --> 2

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: {
                next: null,
            },
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

        this.length++;
    }

    append(appendValue) {
        const appendNode = {
            value: appendValue,
            next: {
                next: null,
            },
        };
        this.tail.next = appendNode
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
        // this.length++;
    }

    // calculate length
    getLength() {
        let currentNode = this.head.next;
        let next = this.head.next;
        let length = 0;
        while (next) {
            next = currentNode.next;
            currentNode = next;
            length++;
        }

        return length

        // let length = 0;
        // let currentNode = this.head;
        // let next = this.currentNode.next;
        // let value = this.currentNode.value;
        // while (next) {
        //     currentNode = next;
        //     next = currentNode.next;
        //     length++;
        // }
    }
}

const linkedList = new LinkedList(15);

// linkedList.prepend(3);
// linkedList.append(3);
// console.dir(linkedList, { depth: null, colors: true });

// linkedList.append(2);
// linkedList.append(4);
// linkedList.append(5);

linkedList.prepend(12);
console.dir(linkedList, { depth: null, colors: true });

console.log('linkedListgetLength', linkedList.getLength());
