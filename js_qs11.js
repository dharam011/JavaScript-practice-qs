// 11. Write toTitleCase(str) that capitalizes each word.


const capitalise = (str) => {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
}
console.log(capitalise("I am a string"))