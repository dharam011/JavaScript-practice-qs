const getMin =(arr)=>{
    let min = arr[0];
    for(let item of arr){
        if(item<min){
            min = item;
        }
    }
    return min
}
console.log(getMin([19,12,32,44,15]))