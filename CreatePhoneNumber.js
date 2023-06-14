// Description
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//1. 
function createPhoneNumber(numbers){

    let div1 = ''
    let div2 = '';
    let div3 = '';
  
    for(let i = 0; i < numbers.length; i++){
        if(i < numbers.length-7) {
            div1 += numbers[i]
        } else if (i >= numbers.length-7 && i < numbers.length-4) {
            div2 += numbers[i]
        } else {
            div3 += numbers[i]
        }
    }
    return `(${div1}) ${div2}-${div3}`
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

//2. 
function createPhoneNumber(numbers){
    
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }
    return format;
  }

console.log(createPhoneNumber([1, 2, 7, 9, 0, 2, 4, 3, 7, 5]))