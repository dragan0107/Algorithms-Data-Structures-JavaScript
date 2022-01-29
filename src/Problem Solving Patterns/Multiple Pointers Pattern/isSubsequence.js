// // Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

//Solution 1. Turn the first string into array, and splice one value out of it when there's a match.
//If there's 0 values at the end, all characters were found.

const isSubsequence = (s1, s2) => {
  if (!str1) return true;

  let str1 = s1.split('');

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === str1[0]) {
      str1.splice(0, 1);
    }
  }
  str1.join('');
  return str1.length === 0;
};
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'acb'); // false (order matters)

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acb'));

// Solution 2; We use 2 pointers, i is moving across the str1 and if it reaches the end of it, we got all matches.

const isSubsequence = (str1, str2) => {
  if (!str1) return true;

  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (i == str1.length - 1) return true;
    if (str1[i] === str2[j]) i++;
  }

  return false;
};
