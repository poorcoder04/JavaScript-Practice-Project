const arr=[1,2,3,4,5];

const square = arr.map((n)=>{
    return n*n;
});

const odd = arr.filter(
    (n)=>{
         return n%2!==0;
    }
)

console.log(square);
console.log(odd);

arr.forEach((n)=>console.log(2*n))

let x = arr.find((n)=>n%2===0);
console.log(x);

let y = arr.some((n)=>{
    return n%2===0;
})
console.log(y);

let z = arr.every((n)=>{
    return n%2===0;
        
})
console.log(z);

//function composition

function add(x){
    return x+2;
}

function mul(x){
    return x*5;
}

function sub(x){
    return x-5;
}

let fn = [add,mul,sub];

function compose(fun){
    return function(x){
        return fun.reduce((val,f)=>{
            return f(val);
        },x)
    }
}

let ans = compose(fn)(3);
console.log(ans);