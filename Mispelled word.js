// DESCRIPTION:
// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

function mispelled (word1, word2) {

    
   if (word1.length > word2.length) {
    return compareNotEqual(word1, word2)
   } else if (word1.length < word2.length) {
    return compareNotEqual(word2, word1)
   } else if (word1.length == word2.length) {
    return compareEqualStr(word1, word2)};
   
   
    function compareNotEqual(longWord, shortWord) {
        return shortWord == longWord.substring(0, longWord.length-1) || shortWord == longWord.substring(1, longWord.length)

    }


    function compareEqualStr(word1, word2) {
      let counter = 0;
      for (let i = 0; i < word1.length; i++) {
          if (word1[i] != word2[i]) {
            counter ++
          }
      }  
      return counter > 1 ? false : true
    }
    
  }

  console.log(mispelled('versed', 'applb'))
  