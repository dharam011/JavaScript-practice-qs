// Write uniqueChars(str) removing duplicate chars.
  // take a new string that is empty 
  // loop through the string 
// if the new string does not include the current character, add it to the new string
// return the new string

function uniqueChars(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (newStr.includes(str[i]) === false) {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(uniqueChars("helloworld"));