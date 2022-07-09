// Change code below this line
function add(...args) {
    // Change code above this line
    let total = 0;
    for (const number of args) {
        total += number;
    }
    return total;
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));