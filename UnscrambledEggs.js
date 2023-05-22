// Description
// Unscramble the eggs.
// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

// 1.
function unscrambleEggs1(word) {
    return word.replace(/egg/gi, '')
}

console.log(unscrambleEggs1("ceggodegge heggeregge"))



// 2. 
function unscrambleEggs(word){
    return word.split("egg").join("")
  }

  console.log(unscrambleEggs("ceggodegge heggeregge"))