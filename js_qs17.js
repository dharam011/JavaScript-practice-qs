// Write getPositiveNumbers(arr) that returns positives.


const getPositive = (arr) => {
    let positive = arr.filter((num) => num > 0);
    return positive;
}
const arr = [1, 2, 3, -4, -5, 6, 7, 8, 9, 10];
console.log(getPositive(arr));