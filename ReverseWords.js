// Description
// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// 1.
function reverseWords(str) {
    let str1 = str.split(" ")
    let result = "";
    for (let i = 0 ; i < str1.length; i++) {
        let word = str1[i]
        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j]
        }
        result += " " 
    }
    return result;
}

console.log(reverseWords('double spaced words'))

// 2.
function reverseWords(str) {
    let str2 = str.split(" ").map((el) => el.split('').reverse().join('')).join(' ')
    return str2
}