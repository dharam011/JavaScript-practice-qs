// merge array 
const mergeArray =(a,b)=>{
    // return [...a,...b];          1st method 
     // // return a.concat(b);        // 2nd method
    
     a.push(...b);  // 3rd method
     return a;
     //
}
console.log(mergeArray([1,2,3],[4,5,6]))
