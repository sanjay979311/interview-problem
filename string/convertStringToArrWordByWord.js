let word = "my name is sanjay kumar";

function stringToArray(str) {
  let result = [];
  let currentWord = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (currentWord.length > 0) {
        result.push(currentWord);
        currentWord = '';
      }
    } else {
      currentWord += str[i];
    }
  }

  // Add the last word to the result if there's any
  if (currentWord.length > 0) {
    result.push(currentWord);
  }

  return result;
}

let arr = stringToArray(word);
console.log(arr);  // Output: ["my", "name", "is", "sanjay", "kumar"]



// function splitWords(str) {
//     let arr = [""], j = 0;
    
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === " ") {
//             j++;
//             arr[j] = "";
//         } else {
//             arr[j] += str[i];
//         }
//     }
    
//     // Remove empty strings (if any) from the array
//     return arr.filter(word => word.length > 0);
// }

// let word = "my name is sanjay kumar";
// let result = splitWords(word);
// console.log(result);




// function mysplit(str,remove){
//     let arr = [""] , j=0;
    
//     for(let i=0; i<str.length;i++){
//         if(str[i] === remove){
//             j++;
//             arr[j] = ""
//         }else{
//             arr[j] += str[i]
//         }
//     }
//     return arr
// }

// let str = "may name is sanjay kumar";
// let remove = " ";
//  let output = mysplit(str,remove)
//  console.log(output)

 