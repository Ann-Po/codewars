// Description

// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, 
// or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, 
// and the sentence: "A man, a plan, a canal – Panama".

1.
function isPalindrome1(x) {
    let reverseX = "";
    for (let i = x.length -1; i >= 0; i--) {
      reverseX += x[i];
    }
    return x.toLowerCase() == reverseX.toLowerCase()
  }

  console.log(isPalindrome1('Madam'))


// 2.
function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
  }

  console.log(isPalindrome('Madam'))




