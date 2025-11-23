
// 9. Write removeDuplicates(arr) without using Set.



let arr = [1, 2,3,3,1,4,6,7,4,3,2,2,1, 6, 7, 8, 9, 10];
let unique = []
for (let item of arr){
    if(unique.indexOf(item)===-1){
        unique.push(item)
    }
}
console.log(unique)