

const revString = function (string){
  rev = ""
  for(let i = string.length-1; i>=0; i--){
    rev +=string.charAt(i) 
  }
  return rev  

}
a = "hello"
console.log(revString(a))