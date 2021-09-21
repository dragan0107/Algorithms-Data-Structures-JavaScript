/* Start looping from with a variable called i the end of the array towards the beginning
Start an inner loop with a variable called j from the beginning until i - 1
If arr[j] is greater than arr[j+1], swap those two values!
Return the sorted array */


const swap = (arr, idx1, idx2) => { // short function for element swapping
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


const bubbleSort = (arr) => {

    for (let i = arr.length - 1; i > 0; i--) { // Outer loop is helping us shrink the window we're sorting, to speed up the process, as the highest number will always be pushed to the end.
        let noSwap = true; // we use this variable to check if there was a swap being done or not. if not, it stays true so we break out of the loop.
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false; // noSwap turned to false since the swap has been done.
            }
        }
        if (noSwap) break; // we break out of the loop, since no swap was done which means its already sorted.
    }
    return arr;
}

console.log(bubbleSort([5, 76, 3, 6, 8, 9, 10, 2, 1, 17, 55, -5, 4, 3]));