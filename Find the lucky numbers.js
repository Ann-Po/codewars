// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

// For example,

// ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// [7,70,17]
// Don't worry about bad input, you will always receive a finite list of integers.


// 1.
var filterLucky1 = x => {
    return x.filter(el => el.toString().includes('7'))
  }

  console.log(filterLucky1([71,9907,69]))


// 2.
  var filterLucky = x => {
    let result = [];
     for (let i = 0; i < x.length; i++) {
       if ((x[i] + '').includes(7)) {
         result.push(x[i]);
       }
     }
     return result;
   }

   console.log(filterLucky([71,9907,69]))


   // 3.
   var filterLucky3 = x => {
    let res = [];
     for (let i = 0; i < x.length; i++) {
       if (`${x[i]}`.includes('7')) {
         res.push(x[i]);
       }
     }
     return res;
   }

   console.log(filterLucky([71,9907,69]))