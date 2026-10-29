let num=[1,2,3,4];
console.log(typeof(num));
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

let arr = [2,4,5,6];
let res = arr.map((val)=> 2*val);
console.log({ res });

str = arr.join('-');
console.log(str);

let s = "Rakibul Hasan";
const s1=s.split(" ");
console.log(typeof(s1));
console.log(s1);
s2= s1.join('-').toLowerCase();
console.log(s2);