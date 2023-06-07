// Description 
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product 
// of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].
// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// function maxProduct(a) {
//     let Arr = a.sort(function(a, b){return a-b})
//     console.log(Arr)
//     //return Arr[Arr.length-1] * Arr[Arr.length-2]
//     return Arr.at(-1) * Arr.at(-2)
//   }




function maxProduct(a) {
    let Arr = Math.max.apply(4, a)
    console.log(Arr)
    //return Arr[Arr.length-1] * Arr[Arr.length-2]
    //return Arr.at(-1) * Arr.at(-2)
  }
  console.log(maxProduct([2, 1, 5, 0, 4, 3]))