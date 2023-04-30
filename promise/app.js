

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




function getIphone(isPassed) {
    let iphonePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have got my I phone')
            } else { reject(new Error('I am failed')) }
        }, 2000)
    })

    return iphonePromise
}
// getIphone(true)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((e) =>{
//         console.log(e.message);
//     })



const BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_URL}/users/1`)
//     .then((res)=>res.json())
//     .then((data)=> Promise.resolve(data))
//     .then((str) => console.log(str))
//     .catch((e)=>{console.log(e);})



function getRequest(url) {

    return new Promise((resolve, reject) => {


        const xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                } else {
                    reject(new Error('Error Occured'))
                }
            }
        }

        xhr.send()
    });
}

// let res = getRequest(`${BASE_URL}/users/1`)
// console.log(res);
// getRequest(`${BASE_URL}/users/1`)
//     .then((data)=> console.log(data))
//     .catch((e)=>console.log(e.message))





