

function outer{
    let x = 10;

    return function inner() {
        console.log('inner ', x);

    }

    // inner()
}

const func = outer()
console.log('funct', func());


function outerCount() {

    let count = 0;

    return function innerCount() {
        count++;

        console.log('inner', count);

    }
}

let returnValue = outerCount();
returnValue()

// real world example

function createBankAccount(initialBalance) {
    let balance = initialBalance;


    return {
        "deposit": (amount) => {
            balance = balance + amount;

            console.log('Deposit', amount, 'cureentBalance', balance);

        },

        "widraw": (amount) => {
            balance = balance - amount;

            console.log('Widraw', amount, 'courrentBalance', balance);

        }
    }
}

const FirstUser = createBankAccount(100)
// console.log(FirstUser(300));
console.log(FirstUser.deposit(300));

