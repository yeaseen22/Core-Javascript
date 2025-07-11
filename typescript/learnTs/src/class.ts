
class Person{
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('hello', this.name);
        
    }
}

const user = new Person('david', 100)


class BankAccount{
    public owner:string;
    private balance: number;
    protected accountType: string;

    constructor(name:string,balance:number){
        this.owner = name;
        this.balance = balance;
        this.accountType = 'Savings'
    }

    showBalance(){
        console.log('your balance is ', this.balance);
    }
}

const account1 = new BankAccount('mamun', 1000)
console.log(account1);


