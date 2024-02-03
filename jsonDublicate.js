var userlist = [
    { name: "sanjay", address: "khalilabad", age: 30 },
    { name: "deena", address: "gkp", age: 20 },
    { name: "sandeep", address: "basti", age: 30 },
    { name: "manish", address: "khalilabad", age: 30 },
    { name: "manish", address: "khalilabad", age: 30 },
    { name: "sanjay", address: "khalilabad", age: 30 },
];

// link https://www.youtube.com/watch?v=Aq2U87pNSJk

const obj = {};
const newList = [];

for (let i = 0; i < userlist.length; i++) {
    // const key = userlist[i].name && userlist[i].address &&  userlist[i].age;
    const key = userlist[i].name + userlist[i].address; // Combine name and address

    if (!obj[key]) {
        obj[key] = true;
        newList.push(userlist[i]);
    }
}

console.log(newList);



// ----------------------------------------------------third ------------------------------------------

var arr = [
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Counting & Cardinality"},
    {"Grade": "Math K", "Domain": "Geometry"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Counting & Cardinality"},
    {"Grade": "Math 1", "Domain": "Orders of Operation"},
    {"Grade": "Math 2", "Domain": "Geometry"},
    {"Grade": "Math 2", "Domain": "Geometry"}
];




let uniqueArr  = {};
let newArr = [];
for(let i = 0; i < arr.length; i++){
    let key = arr[i].Grade + arr[i].Domain;
    if(!uniqueArr [key]){
        uniqueArr [key] = true;
        newArr.push(arr[i]);
    }
}

 console.log(newArr);


//  third solution is ----------------------------

let uniqueSet = new Set();
let result = []
 arr.filter((item) =>{
    let key = JSON.stringify(item);
    if(!uniqueSet.has(key) && uniqueSet.add(key)){
       result.push(item)
    }
})

console.log(result)



// -------------------------------------------other solution ---------------------------
/* {
    "Math K": {
        "Counting & Cardinality": true,
        "Geometry": true
    },
    "Math 1": {
        "Counting & Cardinality": true,
        "Orders of Operation": true
    },
    "Math 2": {
        "Geometry": true
    }
} */

let result2 = {};
  arr.forEach((item) =>{
      let grade = item.Grade;
      let domain = item.Domain;
      if(!result2[grade]){
        result2[grade] = {} 
      }
      result2[grade][domain] = true
  })
  
   console.log( JSON.stringify( result2, null, 4 ) );
   console.log(result2)
