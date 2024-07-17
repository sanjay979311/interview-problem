let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
// remove 4,5

// for(let i=0; i<arr.length; i++){
//     if(arr[i] !==4 && arr[i] !==5){
//         newArr.push(arr[i])
//     }
// }

for(let i=0; i<arr.length; i++){
    if(i !==3 && i !==4){
        newArr.push(arr[i])
    }
}


console.log(newArr); // Output: [1, 2, 3, 6]
