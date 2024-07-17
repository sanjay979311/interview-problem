
let str = "sanjay kumar from khalilabad";

let obj = {};
for(let x of str){
    if(obj[x]){
        obj[x]+=1
    }else{
        obj[x] =1
    }
}

//  for(let i=0; i<str.length; i++){
//      if(obj[str[i]]){
//          obj[str[i]] += 1
//      }else{
//          obj[str[i]] = 1
//      }
//  }

console.log(obj)

