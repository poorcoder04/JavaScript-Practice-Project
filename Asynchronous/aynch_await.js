
function delay(time){

    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    })
}


async function fun(){
   
    await delay(7000);
    console.log("Inside of the function");
}
fun();
console.log("Outside");