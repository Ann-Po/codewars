// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.

function swap (string) {
    let result = '';
    let vowels = 'AEIOU'
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i].toUpperCase())) {
        result += string[i].toUpperCase()
      } else {
      result += string[i];
      }
    }
    return result;
  }

  console.log(swap('HElloWorld'))