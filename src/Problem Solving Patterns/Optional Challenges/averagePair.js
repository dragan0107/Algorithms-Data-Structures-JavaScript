/* Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the 
target average. There may be more than one pair that matches the average */


// Multiple pointers method.

// Big O(n) time complexity.


function averagePair(arr, n) {

    if (arr.length < 2) return false;

    //Setting 1 pointer at start and second at the end.
    let start = 0;
    let end = arr.length - 1;

    // Each iteration we check if avg is higher or lower than N and move the pointers up or down accordingly.
    while (start < end) {

        let avg = (arr[start] + arr[end]) / 2;
        if (avg === n) {
            return true
        } else if (avg > n) {
            end--
        } else {
            start++;
        }
    }
    // If loop ends, means there's no match, so we return false.
    return false;
}








console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
//  averagePair(); // true
//  averagePair(); // false
//  averagePair(); // false