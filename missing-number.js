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


