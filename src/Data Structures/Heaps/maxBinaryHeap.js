const swapElements = (arr, idx1, idx2) => { // short function for element swapping
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) { // Heap insert method.
        this.values.push(val); // Firstly we push the value at the end of the heap.
        let indexOfVal = this.values.length - 1; // Then we declare the value's initial index;
        let parentIdx = Math.floor((indexOfVal - 1) / 2); // Here we define the initial parent of the newly added value.

        while (val > this.values[parentIdx] && parentIdx >= 0) { // Loop will run as long as value is greater than its parent and idx greater or equal to 0;
            swapElements(this.values, indexOfVal, parentIdx); // We swap the values with our helper function.
            indexOfVal = parentIdx; // We update the values index after swapping;
            parentIdx = Math.floor((indexOfVal - 1) / 2); // We re-calculate the parent index;
        }
        return this.values;
    }
    extractMax() {
        // [18, 33, 41, 12, 27, 39]
        swapElements(this.values, 0, this.values.length - 1);
        let popped = this.values.pop();
        let idx = 0;
        let currentPrio = this.values[0].priority;
        let length = this.values.length;
        while (true) {
            let leftIdx = (idx * 2) + 1;
            let rightIdx = (idx * 2) + 2;
            let swap = null;
            let leftChildPrio, rightChildPrio;
            if (leftIdx < length) {
                leftChildPrio = this.values[leftIdx].priority;
                if (leftChildPrio < currentPrio) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                rightChildPrio = this.values[rightIdx].priority;
                if ((swap === null && rightChildPrio > currentPrio) ||
                    (swap !== null && rightChildPrio > leftChildPrio)) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            swapElements(this.values, idx, swap);
            idx = swap;

        }
        return popped;

    }
}

let heap = new MaxBinaryHeap();

heap.insert(12);
heap.insert(39);
heap.insert(41);
heap.insert(33);
heap.insert(27);
heap.insert(55);
heap.insert(18);

console.log(heap.extractMax());
console.log(heap.values); // Output [55, 33, 41, 12, 27, 39, 18]

//                                        55

//                                33              41

//                            12     27       39     18