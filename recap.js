// const variavle can not be changed
const bou = "sundori bou";

// let variable can be changed
let age = 15;
age = 24;
// console.log(age);

// template string
const myNote = `I am a mojnu of ${bou}. my age is ${age}`;
console.log(myNote);


// defatlt parameter
function add(x, y=3){
    const math1 = x * y;
    return math1;
}
console.log(add(12, 5));
// if y value is not given it will consider y value as 3
console.log(add(12));

// spread or three dots(...)
function maxNumber(array = []){
    const biggest = Math.max(...array);
    return biggest;
}
const biggestNumber = maxNumber([12, 13, 65, 99]);
console.log(biggestNumber);

// arrow function
const multiplyThreeTimes = x => x*3;
console.log(multiplyThreeTimes(15));
const multiplyTwoNumbers = (x, y = 10) => x*y;
console.log(multiplyTwoNumbers(12));