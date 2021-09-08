//Write a function that calculates the sum of all numbers from 1 to n (including n)

//for loop slower solution

function addUpTo(n) {

    let sum = 0;

    for (let i = 0; i <= n; i++) {

        sum += i;

    }

    return sum;
}

console.log(addUpTo(5)); //15