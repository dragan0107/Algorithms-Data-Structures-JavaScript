/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

//Big O (n) time complexity

function sumZero(arr) {
    let start = 0;
    let end = arr.length - 1; // One pointer is at start, one is at the end.

    while (start < end) {

        let sum = arr[start] + arr[end];

        if (sum === 0) {
            return [arr[start], arr[end]];
        } else if (sum > 0) { //If sum is greater than 0, we move the end point back
            end--;
        } else if (sum < 0) { // If sum is lower than 0, we move the start point up
            start++
        }
    }
    return undefined; // We return undefined if the pair doesn't exist.
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined