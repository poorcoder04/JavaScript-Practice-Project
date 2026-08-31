let arr = [1,2,3,4,5];

let it = arr[Symbol.iterator]();


let b = {
        a : {
            name: "Rakib",
            age : 24,
            skills : ['c','c++']
        },

        
        //value is a 2D array with 2 colum

    //declare symbol iterator

    [Symbol.iterator] : function(){
        let i=0;
        let value =  Object.values(this.a);
        return{
             next : ()=>{
            if(i<value.length){
                return {value : value[i++], done : false}
            }
            else{
                return {done : true};
            }
        }
        }
}
}

for(let x of b){
    console.log(x)
}

function add(){
    return function mul(){
        console.log(this);
    }
}

add()()

console.log("---------------------------");

function add1(){
    return ()=>{
        console.log(this);
    }
}

add1()()