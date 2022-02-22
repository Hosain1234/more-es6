const fish = {id: 42, name: 'king-hilisha', phone: '01706344228',price: 1200, adress: 'padma-river', dress: 'silver'};
// const fishPhone = fish.phone;
// const fishPrice = fish.price;
// const fishDress = fish.dress;
// here we go
const {phone, price ,id, dress} = fish;
console.log(phone, id, price);

const company = {
    name: 'GP', 
    ceo:{id:1, name:'azmol', food: 'alu-vaji'},
    web: {work: 'web-design', worker: 'md alu', employee: 22, framework: 'react'}
 };
// const work = company.web.work;
const {work, framework} = company.web;
const {food} = company.ceo;
console.log(work, framework, food);
