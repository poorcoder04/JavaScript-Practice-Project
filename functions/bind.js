const person = {
    name : "Rakibul Hasan",
    greet : function(){
        console.log(this.name);
    }
}

person.greet();

const x = person.greet;
const y = x.bind(person);
y();

const obj = {
    name : "Hasan",
    welcome : function(){
        const msg = ()=>{
            console.log(this);
            console.log("welcome " + this.name);
        }
        msg();
    }
}

obj.welcome();

function hello(){
    console.log(this);
}

hello();