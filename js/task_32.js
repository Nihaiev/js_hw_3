// Change code below this line
function addOverNum(maxNumber, ...args) {
  console.log(maxNumber);
  console.log(args);
  let total = 0;
  for (const number of args) {
    if (number > maxNumber) {
      total += number;
    }
  }
  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));