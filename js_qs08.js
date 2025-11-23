
// Write isPalindrome(str) ignoring case.   
const checkPalindrone =(str)=>{
str = str.toLowerCase().trim();
rev=''
for (let i = str.length-1;i>=0 ; i--){
rev+=str.charAt(i)
}
console.log(rev)
if (str === rev){
    return true;
}
else{
    return false;
}
}

console.log(checkPalindrone('oyo '));


