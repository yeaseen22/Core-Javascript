// setTimeout
// setTimeout( () =>{
//     console.log('I Have Done');
// }, 1000)

// function sayName(name){
//     let result;
//     setTimeout(() => {
//         result = name;
//         console.log('I have done');
//     }, 3000);

//     return result;
// }

// function sayName(name){
//     setTimeout(() => {

//         console.log(name);
//     }, 3000);
// }

// let output = sayName('Hm Nayem')
// console.log(output);


const placeOrder = (item) => {
    console.log(`Pleacing order for ${item}`);
    setTimeout((item) => {
        console.log(`${item} is ordered and on it's way`);
        waitForDelivery(item);
    })
}

const waitForDelivery = (item) => {
    console.log(`Waiting for ${item} to be delivered... 🕒`);
    setTimeout(() => {
        console.log(`${item} is delivered! Enjoy! 🎉`);
        enjoyDelivery(item);
    })
}

const enjoyDelivery = () => {
    console.log(`Enjoying the delivered ${item}! 🎉😋`);
}

const orderAndWaitDelivery = () => {
    const item = 'pizza';
    placeOrder(item);
}

// orderAndWaitDelivery();

// async await function
async function test() {
    return 'test';
}

// console.log(test());



let asyncPromise = Promise.resolve('I am a promise')

async function myAsyncFunc() {
    // asyncPromise.then((v) => console.log(v))
    let v = await asyncPromise

}


async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await res.json()

        let names = data.map(item => item.name)
        console.log(names);

    } catch (e) {
        console.log(e.message);
    }
}

// fetchData()



// aync Iterator
let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if(i < 5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else{
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }

}

let iterate = asyncIterable[Symbol.asyncIterator]();
(async function(){
    // let v = await iterate.next()
    // console.log(v);
    console.log(await iterate.next());
})();
// console.log(iterate.next());



// For Await of Loop in Javascript

// (async function () {
//     for await (let v of asyncIterable){
//         console.log(v);
//     }
// })()


// async generator
async function myAsyncGenerator() {
    let i = 0;
    while(true){
        if(i > 5) return 
        yield await Promise.resolve(i++) 
    }
};

(async function (){
    for await (let v of myAsyncGenerator){
        console.log(v);
    }
})()







