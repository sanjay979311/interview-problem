let arr = ["banana", "apple", "mango", "orange"];

function displayRandom(arr) {
    let shuffleArray = [];
    let usedIndexes = new Set();

    while (shuffleArray.length < arr.length) {
        let randomNumber = Math.floor(Math.random() * arr.length);
        if (!usedIndexes.has(randomNumber)) {
            shuffleArray.push(arr[randomNumber]);
            usedIndexes.add(randomNumber);
        }
    }
    return shuffleArray;
}

let output = displayRandom(arr);
console.log(output);

// ----------------------------------------- second ------------------------------------




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

let output2 = displayRandom(arr);
console.log(output2);