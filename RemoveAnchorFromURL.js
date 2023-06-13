// Description
// Complete the function/method so that it returns the url with anything after 
// the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// 1.
function removeUrlAnchor(url){
    let result = "";
    for(let i = 0; i < url.length; i++){
        if(url[i] != "#") {
            result += url[i]
        } else {break}
    }
    return result;
  }

console.log(removeUrlAnchor('www.codewars.com#about'));

// 2.

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

console.log(removeUrlAnchor('www.codewars.com#about'));