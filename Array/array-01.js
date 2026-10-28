let num=[1,2,3,4];
console.log(num);
num.push(5);
num.unshift(0);
console.log(num);

num.splice(1,2);
console.log(num);
// iterate through the array
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

num.forEach((val)=>{
    console.log(val);
})

let num2=[100,90,70];
concatArray=num.concat(num2);
console.log(concatArray);
console.log(num.toString());
console.log(typeof(num));
let c=5;
console.log(Array.isArray(num));
console.log(Array.isArray(c));
