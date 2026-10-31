const cart = [
  {
    name: "iphone",
    qty: 1,
    price: 500,
  },
  {
    name: "pen",
    qty: 3,
    price: 10,
  },
  {
    name: "pencil",
    qty: 1,
    price: 20,
  },
];


const reducer = (acc,cur)=> acc + cur.qty*cur.price;

const total = cart.reduce(reducer, 0);

console.log({total});

const num = [2,4,5];
const res = num.every((cur)=> cur%2===0);
console.log({res});