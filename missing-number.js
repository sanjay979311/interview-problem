// let arr = [1,4,7]

// let n = arr[arr.length-1]
// let missing = [];

// for(let i=1; i<=n; i++){
//     // console.log(arr[i])
//     if(arr.indexOf(i)==-1){
//       missing.push(i) 
//     }
// }
// console.log(missing.toString())


//right way 

const arr3 = [1, 4, 7,15,9];
arr3.sort((a,b) => a-b)
let m = arr3[arr3.length-1];
console.log(m)
 let missing2 = [];
for(let i=1; i<=m; i++){
    if(!arr3.includes(i)){
        missing2.push(i)
    }
}
console.log(missing2)


const arr = [1, 4, 7];
const n = arr[arr.length - 1];
const missing = [];

for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
        missing.push(i);
    }
}

console.log(missing.join(','));


// fir 1 missing number

let arr2 = [1,2,3,5,6];
let total = ((arr2.length + 1) * (arr2.length + 2)) / 2

for(let i=0; i<arr2.length; i++){
     total = total - arr2[i]
}
console.log(total)


