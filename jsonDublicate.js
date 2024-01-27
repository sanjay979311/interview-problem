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
