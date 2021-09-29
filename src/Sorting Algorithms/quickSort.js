const swap = (arr, idx1, idx2) => { // short function for element swapping
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


//This function uses first element as a pivot, then compares it to each value in the array, if the pivot is higher, we increase the numIndex by 1.
//numIndex is used to keep track of the place in array where our number is going to end up after the loop finishes.
//We use the swap function to swap the current value with the higher number on the index of numIndex.
function pivot(arr, start = 0, end = arr.length - 1) {

    let pivot = arr[start];
    let numIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            numIndex++;
            swap(arr, numIndex, i)
        }
    }
    swap(arr, start, numIndex); //Final sort of the pivot to it's right index.
    return numIndex;

}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
            //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1