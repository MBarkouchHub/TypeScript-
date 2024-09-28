let arr1 :(string)[] = ["Mo", "Ali", "Simo"];
let arr2 : number[] = [1,2,3,444.444, 4343, -2222];

let arr3 : (number[] | string)[] = [...arr1 , arr2];

console.log(arr3);
