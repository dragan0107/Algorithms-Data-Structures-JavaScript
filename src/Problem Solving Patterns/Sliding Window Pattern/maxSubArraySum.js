/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array. */

function maxSubarraySum(arr, n) {
    let left = 0;
    let right = n - 1;

    let referenceSum = 0;

    for (let i = 0; i < n; i++) {
        referenceSum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        let tempSum = referenceSum - arr[i] + arr[right + 1];

        if (tempSum > referenceSum) {
            referenceSum = tempSum;
        }
        left++;
        right++;
    }
    console.log(referenceSum);

    return referenceSum;

}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)) // 10
    // console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
    // maxSubarraySum([4, 2, 1, 6], 1) // 6
    // maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
    // maxSubarraySum([], 4) // null