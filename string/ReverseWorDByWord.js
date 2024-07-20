let str = " hi sanjay how are u"; // reverse str

let arr = str.split(" ");

let result = arr.map((item) =>
   item.split("").reverse().join("")
).join(" ")

console.log(result)

// custome function 

function reverseWordsInString(str) {
  let result = '';
  let currentWord = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (currentWord.length > 0) {
        result += reverseString(currentWord) + ' ';
        currentWord = '';
      }
    } else {
      currentWord += str[i];
    }
  }

  // Add the last reversed word to the result if there's any
  if (currentWord.length > 0) {
    result += reverseString(currentWord);
  }

  return result.trim();
}

function reverseString(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

let reversedStr = reverseWordsInString(str);
console.log(reversedStr);  // Output: "ih yajnas woh era u"
