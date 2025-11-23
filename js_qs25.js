// Write intersection(arr1, arr2) returning common elements.
//take an empty array and push the common elements into it.
// loop over both the arrays and check if the elements are same.
// if they are same push them into the empty array.
function intersection(arr1, arr2) {
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));