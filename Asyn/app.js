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
    setTimeout((item)=>{
        console.log(`${item} is ordered and on it's way`);
        waitForDelivery(item);
    })
}

const waitForDelivery =(item) =>{
    console.log(`Waiting for ${item} to be delivered... 🕒`);
    setTimeout(() => {
        console.log(`${item} is delivered! Enjoy! 🎉`);
        enjoyDelivery(item);
    })
}

const enjoyDelivery = () =>{
    console.log(`Enjoying the delivered ${item}! 🎉😋`);
}

const orderAndWaitDelivery = () => {
    const item = 'pizza';
    placeOrder(item);
}

// orderAndWaitDelivery();

// async await function
async function test(){
    return 'test';
}

// console.log(test());



let asyncPromise = Promise.resolve('I am a promise')

async function myAsyncFunc() {
    // asyncPromise.then((v) => console.log(v))
    let v = await asyncPromise

}


async function fetchData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await res.json()

        let names = data.map(item => item.name)
        console.log(names);

    } catch(e){
        console.log(e.message);
    }
}

fetchData()










