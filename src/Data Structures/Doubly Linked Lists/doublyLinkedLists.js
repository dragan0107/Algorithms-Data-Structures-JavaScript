class Node {
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
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let oldTail = this.tail;
            this.tail.next = newNode;
            newNode.previous = oldTail;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        let currentTail = this.tail;
        if (!this.tail) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.previous;
            this.tail.next = null;
            currentTail.previous = null;
        }
        this.length--;
        return currentTail;
    }
}

let list = new DoublyLinkedList();

list.push(14);
list.push(17);
list.push(44);
list.push(76);
console.log(list.pop());
console.log(list);