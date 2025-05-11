const { resolve } = require("core-js/fn/promise");

// first one
new Promise((resolve) => {
    resolve(1);
    Promise.resolve().then(() => {
        console.log(2);

    })
}).then((data) => {
    console.log(data);
})

console.log(3); // 321

new Promise((resolve) => {
    Promise.resolve().then(() => {
        resolve(1);
        Promise.resolve().then(() => {
            console.log(2);

        })
    })
}).then((data) => {
    console.log(data);
})
console.log(3);  //312

