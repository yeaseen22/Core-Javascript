

// firstPromise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'one')
// }); 


// secondPromise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'two')
// });

// secondPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }).catch((e)=>{
//     console.log(e);
// })

// firstPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }).catch((e)=>{
//     console.log(e);
// })

// console.log(firstPromise);
// console.log(secondPromise);




function getIphone(isPassed){
    let iphonePromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(isPassed){
                resolve('I have got my I phone')
            } else{ reject(new Error('I am failed'))}
        }, 2000)
    })

    return iphonePromise
}
getIphone(true)
    .then((res) => {
        console.log(res);
    })
    .catch((e) =>{
        console.log(e.message);
    })





