/* Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */


/* The function counts the frequency of each character in the string, so that later we can loop through the first object 
and check if the key is contained in the second object, but also if the frequency value is same */

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        obj1[letter] = (obj1[letter] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        obj2[letter] = (obj2[letter] || 0) + 1;
    }

    for (let key in obj1) {
        if (!(key in obj2)) return false;

        if (!(obj1[key] === obj2[key])) return false;
    }
    return true;
}



console.log(validAnagram('mmonkki', 'kkominn')) // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('', '')); // true