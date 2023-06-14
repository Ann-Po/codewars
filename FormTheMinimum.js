// Description
// Given a list of digits, return the smallest number that could be formed from 
// these digits, using the digits only once (ignore duplicates).

function minValue(values){
    let UniqueValues = [...new Set(values.sort())]
    return +UniqueValues.join("");
  }

console.log(minValue([1, 3, 1])); // 13
console.log(minValue([4, 8, 1, 4])); // 148