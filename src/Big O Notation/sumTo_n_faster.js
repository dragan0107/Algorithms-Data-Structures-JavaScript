//Write a function that calculates the sum of all numbers from 1 to n (including n)

//faster solution with a formula

function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(5)); //15