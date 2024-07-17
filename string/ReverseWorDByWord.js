let str = " hi sanjay how are u"; // reverse str

let arr = str.split(" ");

let result = arr.map((item) =>
   item.split("").reverse().join("")
).join(" ")

console.log(result)