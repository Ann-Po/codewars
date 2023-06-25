// description
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// 1. 
function validatePIN (pin) {
  let count = 0;
  if (pin.length == 4 || pin.length == 6){
    let num = '1234567890'
    for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < pin.length; j++) {
      if (num[i].includes(pin[j])) {
        count ++;
        };
      };
    };
  };
return count == pin.length ? true : false
}

console.log(validatePIN("0000"))



// 2.
/* 
  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);
