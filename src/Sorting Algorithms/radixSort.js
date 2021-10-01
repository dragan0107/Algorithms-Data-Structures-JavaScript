/* Radix sort creates 10 containers or buckets in a form of an array, for each digit from 0 - 9;
We figure out the number with longest digits in the array. That's how many times outer loop will re-sort the numbers.
Outer loop checks what digit is on k position of a number, and puts it in its corresponding bucket. 
After we do it with each number of the input array, we use spread operator to reassign our input array to this new array
After the outer loop finishes, all numbers are sorted properly */



// getDigit helper function that returns the value of the digit at the i position.
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// This function counts and returns how many digits the input number has.
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// This helper function loops through the input array and finds the number with the most digits.
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let digitBoxes = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let currentDigit = getDigit(arr[i], k);
            digitBoxes[currentDigit].push(arr[i]);
        }
        arr = [].concat(...digitBoxes);
        console.log(arr);
    }
    return arr;
}


console.log(radixSort([1552, 33435, 255, 54, 11, 4, 1717, 14, 9953]));



// function getDigit(number, place) {
//     let value = String(Math.abs(number));
//     console.log(value);
//     let reversedValue = '';
//     for (let i = value.length - 1; i >= 0; i--) {
//         reversedValue += value[i];
//     }
//     if (place > value.length - 1) return 0;
//     return reversedValue[place];
// }