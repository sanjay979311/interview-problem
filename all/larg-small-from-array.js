let arr = [1, 9, 5, 7, 2];

// Sorting the array in ascending order
arr.sort((a,b) => a-b);

// Initializing an empty array to store the result
var result = [];

// Using two pointers approach to iterate through the array
for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    // Checking if i and j are not the same index
    if (i != j) {
        // If not the same, push the element at index j to the result array
        result.push(arr[j]);
    }
    
    // Pushing the element at index i to the result array
    result.push(arr[i]);
}

// Printing the result array
console.log(result);


let arr2s = [1, 9, 5, 7, 2];
arr.sort((a, b) => a - b);

let start = 0;
let end = arr.length - 1;



function largeSmall(arr){
    arr.sort((a,b) => a-b)
    let newArr = [];
    let start = 0;
    let end = arr.length-1
    
    while(start <= end){
    
    if(arr[start] !== arr[end]){
    
    newArr.push(arr[end])
    
    }
    
    newArr.push(arr[start])
    
    start ++
    
    end --
    
    }
    
    return newArr
    
    }
    
    let output = largeSmall(arr)
    
    console.log(output)