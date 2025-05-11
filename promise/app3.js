
// callback
function showMessage() {
    console.log('result is out');

}

// callback hell
// Inversion of controll (passing responsivility and it not fulfilled)

function giveExam(cb) {
    console.log('exam giving');
    cb() // if cb not calling it's making inversion of controll
}

// giveExam(showMessage)


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Done');
        resolve('Promise done')
    }, 1000)
})

// console.log('the promise', p1);

// p1.then((data) => {
//     console.log('from then', data);
// return Promise.resolve() by default
// return 2 it make Promise.resolve(2) note: then catch finally all return resolved promise for chaining

// }).finally(() => {
//     console.log('Finally');

// })

// console.log('promise', p1);

const state = {
    PENDING: 'PENDING',
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}
class MyPromise {
    #promiseState = state.PENDING;
    #handlers = [];
    constructor(callback) {
        callback(this.#resolve, this.#resolve)
    }

    #resolve = (value) => {
        this.#promiseState = state.FULFILLED;

        if (this.#promiseState === state.FULFILLED) {
            this.#handlers.forEach((fns) => {
                fns(value)
            })
        }
    }
    #reject() { }
    then(thencallback) {
        this.#handlers.push(thencallback)
    }
    catch() { }
    finally() { }
}

const promiseObj = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Time form my promise');
    }, 3000)
})

promiseObj.then((data) => {
    console.log('data from resolve', data);
    console.log('i am inside then block');
})

console.log(promiseObj);

/**
 * 1 then catch finally return a resolved promise that's why we can chain it
 * 2 you can have multiple then catch finally
 * 3 only first catch execute other ignored
 * 4 you can pass a second parameter to then block which act as a catch function priority will give to this argument other catch
 * 5 if inside chain. after catch any other then method throw error in this case nearest catch block will get execute
 */


function createAsyncTasks(data, time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data)
        }, time)
    })
}

const pFlavour1 = createAsyncTasks('p1', 100)
const pFlavour2 = createAsyncTasks('p2', 400)
const pFlavour3 = createAsyncTasks('p3', 100)

// to make all promise use in build method
Promise.all([pFlavour1, pFlavour2, pFlavour3]).then((data) => {  // no performance benefits, if one reject then all resolved promised discard
    // console.log('form promise all', data);

})

Promise.allSettled([pFlavour1, pFlavour2, pFlavour3]).then((data) => {  // wait for all promise to resolve or reject, then giving resolve and reject data, there is no reject method, and its array of object
    // console.log('form promise all', data);

})

Promise.race([pFlavour1, pFlavour2, pFlavour3]).then((data) => {  // return one resolve or reject faster than all promise
    // console.log('form promise all', data);

})

Promise.any([pFlavour1, pFlavour2, pFlavour3]).then((data) => {  // if all promise reject it tell that all rejected and catch also execute. but it give resolve one and fastest one.
    // console.log('form promise all', data);

})


function MyPromiseAll(arrayOfPromise) {
    return new Promise(function (resolve, reject) {
        const result = [];
        let flag = 0;

        for (let i = 0; i < arrayOfPromise.length; i++) {
            const pr = arrayOfPromise[i]

            pr.then((data) => {
                flag++;
                result[i] = data;

                if (flag === arrayOfPromise.length) {
                    resolve(data)
                }
            }).catch((erro) => {
                reject(erro)
            })
        }
    })
}

// console.log('testin',MyPromiseAll(pFlavour1, pFlavour2, pFlavour3));

const all = MyPromiseAll(pFlavour1,pFlavour2,pFlavour3).then
console.log('own promise all', all);
