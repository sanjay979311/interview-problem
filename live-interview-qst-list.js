/*
Problem:
The task is to create a function that takes in an array of integers and 
a target number. The function should find all the unique pairs of integers 
in the array that add up to the target number. The output should be in the 
form of an array of arrays, with each sub-array containing a pair of integers.
Example:
Input:
    arr: [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9]
    target: 7
Output:
    [[1, 6], [2, 5], [3, 4]]
*/




/*
Write a JavaScript function to capitalize the first letter of each word in a string.
Example:
console.log(capitalizeWords('globtier infotech pvt. ltd.'));
"Globtier Infotech Pvt. Ltd."
*/

https://www.youtube.com/watch?v=c3vDrvDOi98

function findPairsWithSum(arr, target) {
    const pairs = [];
    const seenNumbers = new Set();

    for (const num of arr) {
        const complement = target - num;

        if (seenNumbers.has(complement)) {
            pairs.push([complement, num]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

// Example usage:
const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];
const target = 7;
const result = findPairsWithSum(arr, target);
console.log(result);
