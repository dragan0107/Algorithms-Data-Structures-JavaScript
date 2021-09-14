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