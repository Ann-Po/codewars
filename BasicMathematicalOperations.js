// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+": return value1 + value2;
    case "-": return value1 - value2;
    case "/": return value1 / value2;
    case "*": return value1 * value2;
  };
}


// function basicOp(operation, value1, value2)
// {
//    let result = "";
//   if (operation === '+') {
//     result = value1 + value2;
//   } else if (operation === "-") {
//     result = value1 - value2;
//   } else if (operation === "*") {
//     result = value1 * value2;
//   } else if (operation === '/') {
//     result = value1 / value2;
//   }
//   return result;
// }



console.log(basicOp("-", 5, 2))