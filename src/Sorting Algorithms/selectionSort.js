/* Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted. */

function swap(arr, idx1, idx2) {
    let smaller = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = smaller;
}


function selectionSort(arr) {

    let indexOfSmallest = 0;
    for (let i = 0; i < arr.length; i++) {
        let smallest = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j];
                indexOfSmallest = j
            };
        }
        swap(arr, indexOfSmallest, i);
        console.log(arr);
    }



    return arr;
}

console.log(selectionSort([5, 15, 3, 6, 4, 1, 11]));