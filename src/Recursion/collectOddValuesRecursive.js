// Function that collects odd values from the input array, using ONLY recursion...


function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) { //Base case returns newArr
        return newArr;
    }

    if (arr[0] % 2 !== 0) { // If a number is odd, we push it to newArr
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1))); // We invoke the function with a shorter array each time until it's 0, when we just return newArr.
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));