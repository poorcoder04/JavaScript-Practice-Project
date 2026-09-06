
name = "Rakibul";
let obj = {
    name : "Hasan",
    fun1 : ()=>{
        console.log(this.name);
        return function(){
            console.log(this.name);
            }
    }
}

obj.fun1()();