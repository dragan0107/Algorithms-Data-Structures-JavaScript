/* Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count */

// Nested loop solution.


const stringSearch = (longStr, val) => {

    let matches = 0; // Track number of matched values.

    for (let i = 0; i < longStr.length; i++) { // Outer loop goes over long string.

        for (let j = 0; j < val.length; j++) { // Inner goes over value we search.
            if (val[j] !== longStr[j + i]) break; // In case we find a matched letter, by using inner loop index J, we test if the next value in longString also matches. If not, we break out. If yes, we keep moving forward until end.

            if (j === val.length - 1) matches++; // If inner loop gets to the last iteration, it means we found a match, therefore, we add +1.
        }

    }
    return matches;
}

console.log(stringSearch('hahaxd lol xdxdlolxd', 'xd')); // 4