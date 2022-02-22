const numbers = [4, 6, 8, 13];
const output2 = [];
// doing using function
const doubleIt = (number) => number*2;
// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

// work sequence
// 1. loop
// 2. element diye function call korsi
// result k array te push korsi

const output = numbers.map(doubleIt);
// console.log(output);
// if i want to make the array element square and store in a new array i can do that using map function
const makeSquare = numbers.map(x => x*x);
console.log(makeSquare);

