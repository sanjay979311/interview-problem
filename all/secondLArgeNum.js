const arr= [1,2,3,4,5,10,8,9,30,25,12];
 let largest = arr[0];
 let sLargest = arr[0];
//  let largest = Number.MIN_VALUE;
//  let sLargest = Number.MIN_VALUE;
 
 for(let i =0; i<arr.length; i++){
      if(arr[i] > largest){
         sLargest = largest;
        //   console.log(largest)
         largest = arr[i]
        
        
     }
     else if(arr[i] > sLargest && arr[i] < largest){
         sLargest = arr[i]
     }
 }

 console.log('largest :',largest)
 console.log("second ",sLargest)

