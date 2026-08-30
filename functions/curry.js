
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

function add1(a,b,c){
    return a+b+c;
}
console.log(add1(10,20));
let ans =add(10)(20);
console.log(ans);

//topic : closure
//1. create a fun which initialize a bank account
//2. return two method: one is deposit & other is withdraw with necessary information

function makebankACCount(initialAmount){
    let balance=initialAmount;
    return{
        deposit(amount){
            balance += amount;
            return `current balance is $${balance}`;
        },

        withdraw(amount){
            if(amount>balance){
                return 'Insufficient Balance';
            }
            else{
                balance-=amount;
                console.log(`current balance is ${balance}`);
            }
        }
    }
}

let account = makebankACCount(100);

console.log(account.deposit(50));
account.withdraw(30);