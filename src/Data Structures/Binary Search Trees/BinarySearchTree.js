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
                if (val === current.val) return undefined;
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
    find(val) { // Value finding method. It will return true if the input value exists in the tree.
        if (!this.root) return false; // Base case if there's no root.
        let current = this.root; // We define our initial node.

        while (true) { // Each time the loop resets, we check if the value is equal to current node's value.
            if (val === current.val) return true;
            if (val > current.val) { // If the input value is greater than current node's value, we first check if right node exists;
                if (current.right) {
                    current = current.right; // If it does, we re-declare the current and loop again.
                } else {
                    return false; // If not, we reached the end of the tree, so we return false.
                }
            } else {
                if (val < current.val) { // If the input value is lower than current node's value, we check if left node exists.
                    if (current.left) {
                        current = current.left; // If it does, we re-declare current node with this left node, and check again in another loop.
                    } else {
                        return false; // If no more lefts, we reached the end of the tree, so we return false.
                    }
                }
            }
        }
    }

    BFS() { // Breadth first method of traversing a tree (it checks the tree basically line by line, from left to right)
        let queue = []; // We will use the queue data structure to push nodes we're checking in a queue;
        let visited = []; // This is where we will store values of a dequeued node;
        queue.push(this.root); // We add the root node to the queue;
        while (queue.length > 0) { // Loop will run until the queue is empty;
            let shifted = queue.shift(); // Firstly, we dequeue the first node and store in a variable;
            visited.push(shifted.val); // Then we push its value to the visited array;
            if (shifted.left) queue.push(shifted.left); // We check if there is any nodes on its left or right, and if yes, we add to queue.
            if (shifted.right) queue.push(shifted.right);
        }
        return visited; // When the loop ends, we return the visited arr.
    }

    // With the current tree values, it would output: [10, 5, 13, 4, 6, 11, 16]

    DFSPreOrder() { // Depth first pre order method.
        let visited = []; // We define our output array.

        let traverse = (node) => { // We define our helped function where we pass the node.
            visited.push(node.val); // Each time we push the value of the node to the output array.
            if (node.left) traverse(node.left) // Then we explore the left side of the tree using recursion as long as there's nodes. 
            if (node.right) traverse(node.right); // After we finish the left side, we do the same on the right side.
        }
        traverse(this.root) // We start the traverse with the root.
        return visited;
    }

    // With the current tree values, it would output: [10, 5, 4, 6, 13, 11, 16]

    DFSPostOrder() { // Depth first post order. Difference is that we start pushing the values after we explore left, and then right side.
        let visited = [];

        let traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root)
        return visited;
    }

    // With the current tree values, it would output: [4, 6, 5, 11, 16, 13, 10]
    DFSInOrder() { // Depth first IN order. What DFS In Order does is, it firstly explores left, visits the node, and explores the right.
        let visited = [];

        let traverse = (node) => {
            if (node.left) traverse(node.left)
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }

    // With the current tree values, it would output: [4, 5, 6, 10, 11, 13, 16]
}

let bst = new BinarySearchTree();

bst.insert(10)
bst.insert(13)
bst.insert(16)
bst.insert(11)
bst.insert(5)
bst.insert(6)
bst.insert(4)


console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());