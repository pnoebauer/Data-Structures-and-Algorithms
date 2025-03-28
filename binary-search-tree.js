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

            let layer = 0;
            while (currentNode) {
                // console.dir({ value, currentNodeInsert: currentNode }, { depth: null, colors: true });
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = new Node(value);
                        console.log('Inserted node into layer', layer + 1);
                    }
                    currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = new Node(value);
                    }
                    currentNode = currentNode.left;
                } else {
                    // no insertion - currentNode already has value to be inserted
                    return this;
                }
                layer++;
            }

            // return this;
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

    delete(value) {
        let currentNode = this.root;

        let layer = 0;

        while (currentNode) {
            if (currentNode.value === value) { // would only happen if root has same value here
                console.log('Delete: Found node with value', { value, layer });
                return layer;
            } else if (value > currentNode.value) {
                const nextNode = currentNode.right;
                if (nextNode.value === value) {
                    //delete
                    layer++
                    console.log('Delete next right node', { value, layer });

                    return layer;
                } else {
                    currentNode = nextNode; //currentNode.right;
                }
            } else if (value < currentNode.value) {
                const nextNode = currentNode.left;
                if (nextNode.value === value) {
                    //delete
                    layer++
                    console.log('Delete next left node', { value, layer });

                    
                    return layer;
                } else {
                    currentNode = nextNode; //currentNode.left;
                }
            }
            layer++;
        }
    }
}

const bst = new BinarySearchTree();
console.dir(bst.insert(10), { depth: null, colors: true });

console.dir(bst.insert(5), { depth: null, colors: true });
console.dir(bst.insert(5), { depth: null, colors: true });

console.dir(bst.insert(15), { depth: null, colors: true });

console.dir(bst.insert(12), { depth: null, colors: true });

console.dir(bst.insert(18), { depth: null, colors: true });

console.dir(bst.insert(8), { depth: null, colors: true });

console.dir(bst.insert(3), { depth: null, colors: true });

console.dir(bst.insert(2), { depth: null, colors: true });

console.dir(bst.insert(4), { depth: null, colors: true });

bst.lookup(4);


bst.delete(4)