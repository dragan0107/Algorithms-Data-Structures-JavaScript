class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (this.size < 1) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            return --this.size;
        }
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        return --this.size;
    }
}

let stack = new Stack();

stack.push(15);
stack.push(52);
stack.push(77);
stack.push(101);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);