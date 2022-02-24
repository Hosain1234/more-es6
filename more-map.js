const friends = ['tom', 'jerry', 'doggy', 'belli'];
// array element length will make another array
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);


const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile', price: 15000, color: 'white'},
    {name: 'khata', price: 30, color: 'green'},
    {name: 'kombol', price: 1500, color: 'white'},
    {name: 'pen', price: 10, color: 'blue'},
    {name: 'water-glass', price: 150, color: 'white-blue mixed'}
];
const productNames = products.map(product => product.name);
console.log(productNames);
const productPrices = products.map(a => a.price);
const productColor = products.map(a => a.color);
// map will return an array
products.map(p => console.log(p));
// forEach will do work but not return anything
products.forEach(p => console.log(p));
console.log(productColor);