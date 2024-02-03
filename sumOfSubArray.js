const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];
let target = 7;

function getSubSum(arr,target){
    // let result = [];
    // let seen = new Set();
    // for(let i=0; i<arr.length;i++){
    //     let num = arr[i]
    //     let component = target - num;
    //      console.log("exist =>",seen)
    //     if(seen.has(component)){
    //         result.push([component,num])
    //     }
    //     seen.add(num)
    // }
    // return result
      let result = [];
    let seen = [];

    for(let i=0; i<arr.length;i++){
        let value = arr[i];
        let component = target - value;
      
        if(seen.includes(component)){
            
             result.push([component,value])
        }
         seen.push(value)
    }
    return result
}

let output = getSubSum(arr,target)
console.log(output)

