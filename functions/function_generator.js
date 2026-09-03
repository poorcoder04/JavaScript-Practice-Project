function* fun(){
    console.log("step 1");
    yield;
    yield 'b';
    yield 'c';
}

// const generator = fun();
// console.log(generator.next());
// console.log(generator.next());

function *fib(num){
    let [prev,cur]=[0,1];
    while(num--){
        yield cur;
        [prev,cur]=[cur,prev+cur];
    }
}

const it = fib(7);
console.log([...it]);

function* infinite(){
    let i=0;
    while(true){
        yield i++;
    }
}

const infin = infinite();
console.log(infin.next().value);