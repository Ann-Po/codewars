// Description
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// 1.
function doubleChar1(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(2);
      };
    return result;
  }

  console.log(doubleChar1("abcd"))



// 2.
function doubleChar(str) {
    return str.split("").map(el => el + el).join("")
  }

  console.log(doubleChar1("abcd"))



