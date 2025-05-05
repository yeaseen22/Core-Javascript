

/** promise state
 * pending when execute the callback 
 * fulfilled when promise fulfilled
 * rejected when promise rejected
 */

const { resolve, reject } = require("core-js/fn/promise")

/** result
 * undefined: initially when the state value is pending
 * value: when reslov called
 * error: when reject called
 */

let promise1 = new Promise((resolve, reject) => {
    resolve('hey promise resolved')
})

let promise2 = new Promise((resolve, reject) => {
    reject('hey promise rejected')
})

promise1.then(
    (result) => {
        console.log(result); // for omiting first params use null
    },
    // (reject) => {console.log(reject);
    // }

).catch((error) => {
    console.log(error);

}).finally(() => {

})


/** Rules
 * we can return another promise in then and we can throw an error, return another value
 * we can rethrow from the catch handle to handle the error later in this case the control go to the next closest catch 
 * finally donnot process any value or error just pass the result as is to the next handler.
 * calling mutiple then method on single promise it not chaining
 */
let getUser = new Promise((resolve, reject) => {
    const user = {
        name: 'demo',
        email: 'demo@gmail.com',
        password: 11111111,
        permission: ['hr', 'dev', 'db']
    }

    resolve(user)
})

getUser.then((user) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bd')
        }, 2000);
    })
}).then((address) => {
    console.log(address);

})

getUser.then((user) => {

    return user.email
}).then((email) => {
    console.log(email);

})

getUser.then((user) => {
    if (!user.permission.includes('hr')) {
        throw new Error('your are not allowed')
    }

    return user.email
}).then((email) => {
    console.log(email);

}).catch((error) => {
    console.log(error);

})

let promise3 = new Promise((resolve, reject) => {
    reject(401)
})

promise3.catch((error) => {
    console.log(error);
    if (error === 401) {
        console.log('retring');
        throw error
    } else {
        // 
    }
}).then((result) => {

}).catch((error) => {
    console.log(error);

})

let promiseFinally = new Promise((resolve, reject) => {
    resolve('testing finally')
})

// doesnot take any argument
promiseFinally.finally(() => {
    console.log('running finally');
    
}).then((result) => {
    console.log(result);
    
})

