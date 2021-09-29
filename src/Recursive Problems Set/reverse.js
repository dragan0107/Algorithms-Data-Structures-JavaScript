// Write a recursive function called reverse which accepts a string and returns a new string in reverse.


const reverse = str => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]; //We slice the string after 0'd element until it's only one. Then we add it back up to the first letter of previous invokes.
};

console.log(reverse('drip'));