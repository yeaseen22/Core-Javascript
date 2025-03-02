

function bankAccount(initialBalance: number) {
    let balance: number = initialBalance; // private variable
    return function () {
        return balance;
    }
}
var account = bankAccount(100000);
console.log(account());
