 const maxArray =function (arr){
    let max = arr[0]
    for (let i =0 ; i< arr.length-1;i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }
  return max 
 }
 console.log(maxArray([1,2,3,24,15,61,67,38,9,10]))