// Write swap(a, b) that swaps two numbers.

function swap(a, b) {
    // [a, b] = [b, a];   
    let temp =a    //using third temp variable
    a =b 
    b =temp
    return [a, b];
}

console.log(swap(1, 2));