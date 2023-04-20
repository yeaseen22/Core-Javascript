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
















