/* Write a function called isSubsequence which takes in two strings,
 and checks whether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function should check
whether the characters in the first string appear somewhere in the second string, without their order changing.*/


// Time: O(n)

// We use the LEFT variable to keep track of the char we're looking for next.
function isSubsequence(str1, str2) {
    let left = 0;

    let sample = '';

    for (let i = 0; i < str2.length; i++) {

        //When we find a match of the char in order, we add it to sample.
        if (str1[left] === str2[i]) {
            sample += str2[i];
            left++;
        }
    }
    // Lastly we compare the str1 and sample to see if they're equal
    if (str1 === sample) { return true } else { return false }

}

console.log(isSubsequence('cool', 'bcxoodl')); // true
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Simpler and a bit shorter method.


function isSubsequence2(str1, str2) {
    if (!str1) return true;

    let i = 0;

    for (let j = 0; j < str2.length; j++) {
        if (i == str1.length - 1) return true; //Each time we ask if the value of i is equal to first string-1. If it is, it automatically is true.
        if (str1[i] === str2[j]) i++; // We only increase i if there is a match in the second string. 
    }

    return false;
};

// console.log(isSubsequence2('cool', 'bcxoodl')); // true
// console.log(isSubsequence2('hello', 'hello world')); // true
// console.log(isSubsequence2('sing', 'sting')); // true
// console.log(isSubsequence2('abc', 'acb')); // false (order matters)