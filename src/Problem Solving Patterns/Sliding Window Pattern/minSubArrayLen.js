// Write a function called minSubArrayLen which accepts two parameters:
// an array of positive integers and a positive integer.

// This function should lenurn the minimal length of a contiguous subarray,
//  of which the sum is greater than or equal to the integer passed to the function.
// If there isn’t one, lenurn 0 instead.

const minSubArrayLen = (arr, num) => {
  let left = 0; // start
  let right = 0; // end
  let sum = 0;
  let len = Infinity;

  while (left < arr.length) {
    if (sum < num && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= num) {
      len = Math.min(len, right - left);
      sum -= arr[left];
      left++;
    } else {
      break;
    }
    console.log(sum);
  }

  return len === Infinity ? 0 : len;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 4));
