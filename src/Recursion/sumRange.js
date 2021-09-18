// Write a function that sums up the number to a range N, using recurion.


function sumRange(n) {
    if (n === 0) {
        return 0;
    }

    return n + sumRange(n - 1);
}

console.log(sumRange(3));