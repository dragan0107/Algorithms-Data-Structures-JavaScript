class Node { // Each node of BST has a value, pointer to the left and pointer to the right.
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) { // Tree insertion method.
        let newNode = new Node(val);
        if (!this.root) { // If the tree is empty, there's no root so therefore we initiate it.
            this.root = newNode;
            return this;
        } else { // If not empty we have to find where to store the node.
            let current = this.root; // We define the variable current which will be updated with every while loop iteration.
            while (true) { // Loop will be running until we break out with return statement.
                if (val > current.val) {
                    if (current.right) { // If input value is greater than current, and there is a value on current's right, we update current.
                        current = current.right;
                    } else { // If not, we store the node, and return to break out of loop.
                        current.right = newNode;
                        return this;
                    }
                } else if (val < current.val) { // If value is lower than current's
                    if (current.left) { // If value is lower than current's,  but there is a value on current's left, we update.
                        current = current.left;
                    } else { // If there is no value on current's left, we store the new node there and return to break out of loop.
                        current.left = newNode;
                        return this;
                    }
                }
            }
        }

    }
}

let bst = new BinarySearchTree();

bst.insert(10)
bst.insert(13)
bst.insert(16)
bst.insert(11)
bst.insert(5)
bst.insert(7)
bst.insert(2)
console.log(bst);