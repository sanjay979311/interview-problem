let arr = ["banana", "apple", "mango", "orange"];

function displayRandom(arr) {
   let shuffleArray = [];
   let useIndex = [];
   
   while (shuffleArray.length < arr.length) {
       let randomNumber = Math.floor(Math.random() * arr.length);
       if (!useIndex.includes(randomNumber)) {
           shuffleArray.push(arr[randomNumber]);
           useIndex.push(randomNumber);
       }
   }
   return shuffleArray;
}

let output = displayRandom(arr);
console.log(output);