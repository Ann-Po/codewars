// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// 1.
function accum(s) {
    let s1 = s.toLowerCase();
	let result = '';
    for (let i = 0; i < s1.length; i++) {
        result += s1[i].toUpperCase() + s1[i].repeat(i) + '-'
    }
    return result.slice(0, result.length-1)
}

console.log(accum('cwAt'))


// 2.
function accum(s) {
    return s.split('').map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join('-')
}

console.log(accum('cwAt'))