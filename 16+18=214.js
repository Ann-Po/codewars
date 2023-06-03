function add(num1, num2) {
    let result = [];
    for (let i = 0; i <= num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            result.push(num1[i] + num2[j]);
            i++;
            j++;
        }
    }
    return result;
}

console.log(add(23, 1))