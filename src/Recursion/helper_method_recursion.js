// Function that collects odd values from the input array, using recursion and helper method.

function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) { // Base case.
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]) // Push odd values into our result array.
        }

        helper(helperInput.slice(1)) // Invoke another helper function starting from position 1 in array each time.
    }

    helper(arr)

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));