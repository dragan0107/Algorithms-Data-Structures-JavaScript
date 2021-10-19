class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }
    dequeue() {
        let removed = this.first;
        if (!removed) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
        }
        this.size--;
        return removed.val;
    }
}

let q = new Queue();

q.enqueue(17);
q.enqueue(53);
q.enqueue(434);
console.log(q.dequeue());
console.log(q.dequeue());
// console.log(q.dequeue());
console.log(q);