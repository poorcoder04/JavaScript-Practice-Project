let num = [0, 3, 5, 2, 10];

const num2 = num.toSorted((a,b)=>a-b);
console.log({num2});
console.log({num});

num.sort((a,b)=>a-b);
console.log({num});

let s =["c", "c++", "python", "Java"];

const comparator=(a,b)=>{
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if(x>y)
        return -1;
    if (x<y)
        return 1;
    if(x===y)
        return 0;
}
console.log(s.sort(comparator));

let employees = [
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
];

const com = (a,b)=>{
    if(a.salary>b.salary)
        return -1;
    if (a.salary < b.salary)
        return 1;
    return 0;
}

employees.sort(com);
console.log(employees);

const dateCom = (a,b)=>{
    let x = new Date(a.hireDate);
    let y = new Date(b.hireDate);
    return x-y;
}

console.log(employees.sort(dateCom));

let a = [1,2,3,4];

a.forEach((val,index,array)=> array[index]=2*val);
console.log({a});