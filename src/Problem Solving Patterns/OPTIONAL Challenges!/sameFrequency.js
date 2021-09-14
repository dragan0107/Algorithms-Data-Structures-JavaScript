/* Write a function called sameFrequency
Given two positive integers, find out if the 
two numbers have the same frequency of digits. 

Your solution MUST have the following complexities:
-Time: O(N) */



function sameFrequency(a, b) {

    let num1 = a + '';
    let num2 = b + '';

    if (num1.length !== num2.length) return false; // Checks the length.

    let obj1 = {};
    let obj2 = {};

    // Loops through each string and for each char it adds +1, and if its 0, it adds starting 1;
    for (let i = 0; i < num1.length; i++) {
        obj1[num1[i]] ? obj1[num1[i]] += 1 : obj1[num1[i]] = 1;
    }

    for (let i = 0; i < num2.length; i++) {
        obj2[num2[i]] ? obj2[num2[i]] += 1 : obj2[num2[i]] = 1;
    }

    // Loops through obj1 and first checks if there is such a key in second object, then checks if their values are same.
    for (let key in obj1) {

        if (!(key in obj2)) return false;

        if (obj1[key] !== obj2[key]) return false;
    }

    // Loop finished, nothing is false, so we return true.
    return true;

}


console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false