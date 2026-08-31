
function memoization(func){
    let save = {};
    return function(val){
        if(val in save){
            return save[val];
        }
        else{
            console.log("....calculating");
            let res = func(val);
            save[val]=res;
            return save[val];
        }
    };
}

function multiplication(x){
    return 2*x;
}

let temp = memoization(multiplication);
console.log(temp(5));
console.log(temp(5));

setTimeout(()=>fun(10), 5000)

function fun(x){
    console.log(`Rakib ${x}`);
}