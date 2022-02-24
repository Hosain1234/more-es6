const numbers = [5, 13, 25, 256, 23, 23, 40, 27, 37, 27];
// map will take every element then perform an action and return result as array
const bigNumber = numbers.filter(a => a>25);
const smallNumber = numbers.filter(s => s<25);
// console.log(smallNumber);
// console.log(bigNumber);


const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile', price: 15000, color: 'white'},
    {name: 'khata', price: 30, color: 'green'},
    {name: 'kombol', price: 1500, color: 'white'},
    {name: 'pen', price: 10, color: 'blue'},
    {name: 'water-glass', price: 150, color: 'white-blue mixed'}
];

const expensive = products.filter(exp => exp.price > 1000);
// console.log(expensive);
const white = products.filter(pro => pro.color == 'white');
const black = products.filter(pro => pro.color == 'black');
// console.log(white);
// console.log(black);

const whiteItems = products.find(a => a.color == 'white');
console.log(whiteItems);

// different between filter and find is
// filter will give an array of elements those fulfil the condition
// find will give only first element that fulfills condition
