class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.top = new Node(value);
        this.bottom = this.top;

        this.length = 1;
    }

    printStack() {
        const stackList = [];
        let currentNode = this.top;
        while (currentNode) {
            stackList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(stackList);
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        // option (A)
        newNode.next = this.top;
        this.top = newNode;
        /////////

        // option (B)
        // const holdingPointer = this.top;
        // this.top = newNode;
        // this.top.next = holdingPointer;
        /////////

        this.length++;
        return this;
    }

    pop() {
        // option (A)
        const holdingPointer = this.top.next;
        this.top = holdingPointer;
        /////////

        // option (B)
        // this.top = this.top.next;
        /////////

        this.length--;
        return this;
    }
}

const stack = new Stack(5);

console.log(stack.peek());

console.log(stack.push(4));
console.log(stack.push(3));
stack.push(2);
stack.push(1);
console.log(stack.peek());

stack.pop();
console.log(stack.peek());

stack.printStack();
stack.pop();

stack.printStack();
