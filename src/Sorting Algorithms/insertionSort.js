/* Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, 
iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted. */

const swap = (arr, idx1, idx2) => { // short function for element swapping
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// create one outer loop starting at 1;
//create inner loop starting at i-1; then we loop backwards and compare i to each previous element.
//if i is lower than any previous character, it gets placed in front


function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) { // we keep looping until the j value is greater than i.
            arr[j + 1] = arr[j]; // we also used VAR instead of LET to make use of the loops scope.
        }
        arr[j + 1] = currentValue; //since the inner loop finished, we found where the current value has to be placed, and we continue increasing i.
    }
    console.log(arr);

    return arr;
}

console.log(insertionSort([7, 1, 5, 10, 12, 3])); // [ 1, 3, 5, 7, 10, 12 ]