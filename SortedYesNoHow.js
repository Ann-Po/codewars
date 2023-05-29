// Description
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


//1. 
function isSortedAndHow(array) {

if (ascending(array)) {
    return 'yes, ascending';
} else if (descending(array)) {
    return 'yes, descending';
} else {
    return 'no'
}


function ascending(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let previous = array[i - 1];
        if (current < previous) {
            return false
        } 
    }
    return true
}


function descending(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let previous = array[i - 1];
        if (current > previous) {
            return false
        } 
    }
    return true
}
}

console.log(isSortedAndHow([4, 2, 30]))



// 2.

function isSortedAndHow1(array) {
    let arrayNew = array.join('')
    let arrayAsc = array.sort(function(a, b){return a - b}).join('')
    let arrayDes = array.sort(function(a, b){return b - a}).join('')
    if (arrayNew == arrayAsc) {
      return 'yes, ascending'
    } else if (arrayNew == arrayDes) {
      return 'yes, descending'
    } 
    return 'no'
  }

  console.log(isSortedAndHow1([4, 2, 30]))

