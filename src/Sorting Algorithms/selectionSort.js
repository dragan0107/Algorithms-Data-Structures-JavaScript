/* Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted. */

function swap(arr, idx1, idx2) { // place swapping function.
    let smaller = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = smaller;
}


function selectionSort(arr) {

    let indexOfLowest = 0; // we declare the indexofLowest and store it there so we can pass it in the swapping function.
    for (let i = 0; i < arr.length; i++) {
        let lowest = arr[i]; //choosing the first element of the window as lowest and updating it with lower one.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < lowest) {
                lowest = arr[j]; // updating the lowest 
                indexOfLowest = j
            };
        }
        swap(arr, indexOfLowest, i);
    }
    return arr;
}

console.log(selectionSort([5, 15, 3, 6, 4, 1, 11]));