//12. Write getOddNumbers(arr) that returns odd numbers.
const getOdd = (arr)=>{
   const filterOdd= arr.filter (x => x % 2 === 1);
   return filterOdd;
}
console.log(getOdd([1,2,4,6,7,4,5,3,555656,3,,2,232,1,23,232,4,4,4,]))