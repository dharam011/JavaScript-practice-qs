// Write flattenOnce(arr) that flattens one level.

function flattenOnce(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(flattenOnce([1, 2, [3, 4, 5, [6]]])); // [1, 2, 3, 4, 5, [6]]