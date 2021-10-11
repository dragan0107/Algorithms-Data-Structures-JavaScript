//SLL is a one-directional data structure, which means it consists of nodes with no indexes, but only of its value and a pointer to the next value.



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
    pop() { // Pop method of the linked list.
        let current = this.head; // We use 2 values; 
        let newTail = current;
        while (current.next) { //Current will go ahead of new tail as long as there is next, and be redeclared.
            newTail = current;
            current = current.next;
        }
        this.tail = newTail; // Once there is no next. we set our new tail, and next to null.
        this.tail.next = null;
        this.length--; // List length goes -1;
        if (this.length === 0) { // If length is 0, that means list is empty so head and tail are null;
            this.head = null;
            this.tail = null;
        }
        return current; // We return the popped value;
    }
    shift() { // Shift method removes one node from the start of the list.
        let removed = this.head; // Storing the current head into variable since we return it at the end.
        if (!removed) return undefined;
        this.head = removed.next; // Setting new head.
        this.length--; // Decrementing the length.
        if (this.length === 0) { // If length is 0, that means list is empty so head and tail are null;
            this.head = null;
            this.tail = null;
        }
        return removed;
    }
}


let list = new SinglyLinkedList();
list.push(15)
list.push(17)
list.push(29)
console.log(list.shift())
console.log(list);