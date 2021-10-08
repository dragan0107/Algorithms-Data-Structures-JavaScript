class Node { //We define our node's value and next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { // SLL push method for adding new nodes.
        let newNode = new Node(val); // Firstly we declare it.
        if (!this.head) { // If there's no head, new node is both head and tail.
            this.head = newNode;
            this.tail = this.head;
        } else { // If there is a head, we change the initial tail's next value to new node. And also we set the new tail.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // We increase the length by 1 each time and return the list.
        return this;
    }
}


let list = new SinglyLinkedList();
// list.push(15)
// list.push(17)
// list.push(29)
console.log(list.head.next);