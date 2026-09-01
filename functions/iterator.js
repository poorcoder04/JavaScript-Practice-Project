
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

// for(let x of b){
//     console.log(x)
// }



name = "Rakibul";

let obj = {
    name : "Hasan",
    fun : ()=>{
        console.log(this.name);
        return function(){
            console.log(this.name);
        }
    }
}

obj.fun()();





