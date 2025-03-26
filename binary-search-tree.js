class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        } else {
            let currentNode = this.root;

            // while (!!currentNode.left && !!currentNode.right) {
            //     if (currentNode.value < value) {
            //         // go right
            //         currentNode = currentNode.right;
            //     } else {
            //         // go left (TODO: edge case isEqual)
            //         currentNode = currentNode.left;
            //     }
            // }

            // // console.dir(currentNode, { depth: null, colors: true });
            // if (!currentNode.left && !currentNode.right) {
            //     if (currentNode.value < value) {
            //         // insert right
            //         currentNode.right = new Node(value);
            //     } else {
            //         // insert left (TODO: edge case isEqual)
            //         currentNode.left = new Node(value);
            //     }
            // } else if (!currentNode.left) {
            //     // insert left (TODO: edge case isEqual)
            //     currentNode.left = new Node(value);
            // } else if (!currentNode.right) {
            //     // insert right (TODO: edge case isEqual)
            //     currentNode.right = new Node(value);
            // }

            while (currentNode) {
                // if (currentNode.value === value) { // TODO: edge case isEqual
                //     console.log('Found node with value', value)
                //     return currentNode;
                // } else if (value > currentNode.value) {
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = new Node(value);
                        // could break or keep going - next loop will be equal and hence traversal stops
                    }
                    currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = new Node(value);
                        // could break or keep going - next loop will be equal and hence traversal stops
                    }
                    currentNode = currentNode.left;
                } else {
                    return this;
                }
            }

            return this;
        }
    }

    lookup(value) {
        let currentNode = this.root;

        let layer = 0;

        while (currentNode) {
            if (currentNode.value === value) {
                console.log('Found node with value', { value, layer });
                return layer;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            layer++;
        }

        return null;
    }

    delete(value) {}
}

const bst = new BinarySearchTree();
console.dir(bst.insert(10), { depth: null, colors: true });

console.dir(bst.insert(5), { depth: null, colors: true });

console.dir(bst.insert(15), { depth: null, colors: true });

console.dir(bst.insert(12), { depth: null, colors: true });

console.dir(bst.insert(18), { depth: null, colors: true });

console.dir(bst.insert(8), { depth: null, colors: true });

console.dir(bst.insert(3), { depth: null, colors: true });

console.dir(bst.insert(2), { depth: null, colors: true });

console.dir(bst.insert(4), { depth: null, colors: true });

bst.lookup(4);
