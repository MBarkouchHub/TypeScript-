

const returnType = <dynamic = string>( value : dynamic) : dynamic => value;

console.log(typeof returnType<number>(12))
console.log(typeof returnType(11))
console.log(typeof returnType<boolean>(false))
console.log(typeof returnType<number[]>([0,12]))