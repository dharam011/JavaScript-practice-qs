// Write groupBy(arr, key) grouping objects.
const groupBy = (arr, key) => {
    return arr.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
    }, {});
};
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
];
console.log(groupBy(users, 'age'));