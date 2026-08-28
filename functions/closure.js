
//closure
function increment()
{
    let counter=0;
    return function add()
    {
        counter+=1;
        return counter;
    }
}

const x= increment();
x();
x();
console.log(x());

//IIFE

(function IIFE()
{
    console.log("Immediately Invoked Function Expression");
})();

var y=3;
function add()
{
    var y=5;
    console.log(y);
}

add();
console.log(y);