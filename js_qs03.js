// 3. Write sumArray(arr) that returns sum of all elements.

const sum = function (args){
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5]));