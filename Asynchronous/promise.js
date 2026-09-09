let evencheck = new Promise((resolve,reject)=>{
    let n=4;
    if(n%2===0){
        resolve("n is even");
    }
    else{
        reject("n is odd");
    }
});

evencheck
    .then((message)=>{console.log(message);})
    .catch((message)=>{console.log(message);})



const fun = function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = {
                name : "Rakibul Hasan",
                age : 24
            }
            resolve(user);
        },5000)
    })
}

function getOrder(user){

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        order = {
            item : "Mobile",
            piece : 2
        }
        resolve(order);
    },2000)
    })
}

console.log("start");
fun()
    .then((user)=>{
        console.log(user);return getOrder(user)})
        .then((order)=>{console.log(order);})

console.log("END");