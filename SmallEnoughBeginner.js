// Description
// You will be given an array and a limit value. You must check that all 
// values in the array are below or equal to the limit value. If they are, 
// return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    let arr = a.sort((a, b) => a - b)
      return (arr[arr.length-1]) <= limit ? true : false;
  }

console.log(smallEnough([66, 2, 101], 200));