/* This function accepts a SORTED array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
If you find the value you want, return the index
If the value is too small, move the left pointer up
If the value is too large, move the right pointer down
If you never find the value, return -1 */

const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let midPoint = Math.floor((start + end) / 2);

        if (arr[midPoint] === val) {
            return midPoint;
        } else if (arr[midPoint] > val) {
            end = midPoint - 1;
        } else if (arr[midPoint] < val) {
            start = midPoint + 1;
        }
    }
    return -1;
}

// sample array length is 11.
console.log(binarySearch([1, 5, 7, 15, 26, 46, 77, 88, 101, 150, 177], 15)); //  3 
console.log(binarySearch([1, 5, 7, 15, 26, 46, 77, 88, 101, 150, 177], 101)); //  8
console.log(binarySearch([1, 5, 7, 15, 26, 46, 77, 88, 101, 150, 177], 104)); //  -1
console.log(binarySearch([1, 5, 7, 15, 26, 46, 77, 88, 101, 150, 177], 177)); //  10