// Write a function that calculates the factorial of a number N using recursion.


function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(10));