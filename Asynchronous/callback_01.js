function add(a,b){
    return a+b;
}

function calculate(a,b,callback){
    return callback(a,b);
}
//add means function itself. add() means call the function immediately.Function is a first class citizen in js.It actually a value/object.
let result = calculate(1,4,add);
console.log(result);
console.log(calculate);

let val;

function done(value){
    val=value;
    display();
}
setTimeout(()=>{
    done(10);
},1000);
function display(){
    console.log(val);
    console.log(val);
    console.log(val);
}
