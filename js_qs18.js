// Write repeatString(str, n) without using repeat().


const repeat =(string , n)=>{
  str = ''
  for (let i =0; i<n; i++){
    str = str.concat(string)
  }
  return str
}
console.log(repeat("dharam ", 3))