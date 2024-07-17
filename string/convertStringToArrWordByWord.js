function splitWords(str) {
    let arr = [""], j = 0;
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            j++;
            arr[j] = "";
        } else {
            arr[j] += str[i];
        }
    }
    
    // Remove empty strings (if any) from the array
    return arr.filter(word => word.length > 0);
}

let word = "my name is sanjay kumar";
let result = splitWords(word);
console.log(result);




function mysplit(str,remove){
    let arr = [""] , j=0;
    
    for(let i=0; i<str.length;i++){
        if(str[i] === remove){
            j++;
            arr[j] = ""
        }else{
            arr[j] += str[i]
        }
    }
    return arr
}

let str = "may name is sanjay kumar";
let remove = " ";
 let output = mysplit(str,remove)
 console.log(output)

 