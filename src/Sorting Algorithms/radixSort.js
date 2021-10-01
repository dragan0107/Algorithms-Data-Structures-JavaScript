// getDigit helper function that returns the position index of the input value.

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

// Shorter version that does exactly the same as the one above.
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