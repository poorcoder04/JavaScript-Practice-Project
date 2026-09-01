
let obj = {
    name : "Rakibul Hasan",
    fun1 : function(){
        console.log(this.name);
        return ()=>{
            console.log(this.name);
            }
    }
}

obj.fun1()();