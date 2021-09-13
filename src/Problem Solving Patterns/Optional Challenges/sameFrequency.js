/* Write a function called sameFrequency
Given two positive integers, find out if the 
two numbers have the same frequency of digits. 

Your solution MUST have the following complexities:
-Time: O(N) */



function sameFrequency(a, b) {
    let num1 = a + '';
    let num2 = b + '';

    if (num1.length !== num2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < num1.length; i++) {
        obj1[num1[i]] ? obj1[num1[i]] += 1 : obj1[num1[i]] = 1;
    }

    for (let i = 0; i < num2.length; i++) {
        obj2[num2[i]] ? obj2[num2[i]] += 1 : obj2[num2[i]] = 1;
    }



}





sameFrequency(182, 281) // true
    //  sameFrequency(34, 14) // false
    //  sameFrequency(3589578, 5879385) // true
    //  sameFrequency(22, 222) // false