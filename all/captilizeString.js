let str = "Welcome to Programiz";

function  getStr(sentance){
    let str = sentance.split(' ');
   
    for(let i=0; i<str.length;i++){
       str[i] = str[i][0].toUpperCase() + str[i].substring(1)
      
    }
     
    return str.join(' ')
}

const output = getStr(str)
 console.log(output)


 //second solution

 let words =  "online javascript editor for free";
let arr = words.split(" ");

  let output2 = arr.map((item) =>{
     return item = item[0].toUpperCase() + item.substr(1)
  }
     
 )
  console.log(output2)