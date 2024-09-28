"use strict";
function printPrams(p1 = "p1", p2 = 0, p3 = false) {
    console.log(`${p1} -- ${p2}  -- ${p3} \n`);
}
printPrams();
printPrams(undefined, 50, true);
printPrams("sss", 12, false);
function total(...nums) {
    let total = 0;
    nums.forEach((value) => {
        total += value;
    });
    return `Total : ${total}. \n`;
}
console.log(total(213, 2323, 32123, 123, 213, 2, 211, +true, +false, +[]));
const plusWithArrow = (num1, num2) => num1 + num2;
console.log(plusWithArrow(2, 2));
console.log("\n");
