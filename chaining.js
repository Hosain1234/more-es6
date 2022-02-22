// decliar variable based on the name of an object property
const myObject = {
    x: 20,
    y: 56,
    z: 600,
    a: 25,
    b: 69
};
const { x, b} = myObject;
console.log(x);
// destructuring can be done in array
const [p, q] = [45, 37, 34];
// console.log(p, q);


const [best, faltu] = ['momotaj', 99, 56];
console.log(best, faltu);
// const er porer {} er moddhe j j object use korte chai ogula likhte hobe
const {sky, river, money, wind} = { sky:'blue', river:'flowing', wind: 'blowing', money: 600};
console.log(sky, money);

// chaining
const company = {
    name: 'GP', 
    ceo:{id:1, name:'azmol', food: 'alu-vaji'},
    web: {work: 'web-design', worker: 'md alu', employee: 22, framework: 'react'}
 };

 console.log(company.web.work);
//  jodi kisu na thake array te tahole ?. dite hobe and output undefined dekhabe kintu error dibena
console.log(company?.ceo?.name?.framework);