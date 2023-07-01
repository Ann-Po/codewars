// Description
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let result = 0;
    let vocals = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < str.length; i++) {
        if(vocals.includes(str[i].toLowerCase())) {
            result++;
        }
    }
    return result
  }


console.log(consonantCount('bcdfghjklmnpqrstvwxyz')); //21