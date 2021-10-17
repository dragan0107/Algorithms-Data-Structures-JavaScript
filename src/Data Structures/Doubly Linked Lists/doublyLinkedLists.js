class Node { // Dll node class.
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { // Push method adds one node at the end of the list.
        let newNode = new Node(val);
        if (this.length === 0) { // If list is empty, we set new node to be head and tail.
            this.head = newNode;
            this.tail = this.head;
        } else {
            let oldTail = this.tail; // Firstly we store old tail into a variable.
            this.tail.next = newNode; // Then we change its next value to point at the new node.
            newNode.previous = oldTail; // Now, we point to the old tail from the new node.
            this.tail = newNode; // And we finally set the new tail to be new node.
        }
        this.length++; // Length increase by 1.
    }
    pop() { // Pop method removes one node from the end.
        let oldTail = this.tail; // Storing current tail.
        if (!this.tail) return undefined;
        if (this.length === 1) { // If only one node in the list, we set both head and tail to null.
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.previous; // We re-define new tail to be the old tail's previous value.
            this.tail.next = null; // And we set the new tails next value to be null.
            oldTail.previous = null; // We also set old tail's prev value to be null, so we don't have access to it when we return.
        }
        this.length--;
        return oldTail;
    }
    shift() {
        let oldHead = this.head;
        if (!this.head) return undefined;
        if (this.length === 1) { // If only one node in the list, we set both head and tail to null.
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

let list = new DoublyLinkedList();

list.push(14);
list.push(17);
list.push(44);
list.push(76);
console.log(list.shift());

console.log(list);