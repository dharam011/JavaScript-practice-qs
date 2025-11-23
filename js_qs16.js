// Write countChar(str, ch) that counts a char.
const countChar =(str , char)=>{
    let count = 0;
    str = str.toLowerCase();
    char = char.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        
        if(str.charAt(i)==char)
        count += 1;

    }
    return count;
}
console.log(countChar("dharama","a"));