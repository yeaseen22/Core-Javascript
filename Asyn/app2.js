

// problem with promise
Promise.resolve().then((data) => {
    Promise.resolve(data).then((data2) => {
        Promise.resolve(data2).then((data3) => {
            console.log(data3);
            // things are nested not readable flow not control
        })

    })
})

// async await it make our code look like it is synchronous, it is not make code synchronous magically
function fakeAxios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('data received')
        }, 3000)
    })
}

// conver into async await
// fakeAxios.then((data) => {
//     console.log(data);
// })

// utiliti fn
async function myAsync(callback) {
    try {
        const data = await callback();
        return [data, null]
    } catch (e) {
        return [null, e]
    }
}

async function getData() { //async function always return resolved promise

    // try {
    //     const data = await fakeAxios() // await can work with non promise value also
    //     console.log(data);
    // } catch (e) {
    //     console.log(e);
    // }

    // const data = await fakeAxios().catch((e) => { // back with .catch chain
    //     console.log(e);

    // })

    const data = await myAsync(fakeAxios)
    console.log(data);
    
}

// getData()

// (async function () {
//     const data = await 4
//     console.log(data);

// })()
// console.log('outside');


function fakePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('data received')
        }, 3000)
    })
}

// thenable object
async function test(){
    const data = await {then: function(resolve,reject){
        resolve(2)
    }}
    console.log(data);
    
}
test()