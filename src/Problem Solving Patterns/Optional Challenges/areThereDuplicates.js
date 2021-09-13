/* Implement a function called, areThereDuplicates which accepts a 
variable number of arguments, and checks whether there are any
duplicates among the arguments passed in. You can solve this using 
the frequency counter pattern OR the multiple pointers pattern. */

// Big O (2n) = O (n)

// Frequency counter method.
function areThereDuplicates(...args) {

    let obj = {};

    // For each element in args we either set value to 1 or add +1;
    args.forEach(el => {
        obj[el] ? obj[el] += 1 : obj[el] = 1;
    })

    // If any key in object is greater than 1, thats a duplicate so we return true.
    for (let key in obj) {
        if (obj[key] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true