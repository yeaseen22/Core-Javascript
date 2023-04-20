// Asynchronouse Javascript and Xml(JSON)

// Ajax with Callback
const xhr = new XMLHttpRequest()
xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

xhr.onreadystatechange = function(e){
    if(xhr.readyState === 4) {
        if(xhr.status === 200){
            let users = JSON.parse(xhr.response)
            console.log(users);
        } else{
            console.log(xhr.status);
        }
    }
}

xhr.send()

// function getRequest(url, callback){

//     const xht = new XMLHttpRequest();
//     xht.open('get', url);

//     hr.onreadystatechange = function(e){
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200){
//                 let response = JSON.parse(xhr.response)
//                 console.log(response);
//                 callback(null, response)
//             } else{
//                 console.log(xhr.status);
//             }
//         }
//     }
    
//     xhr.open()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(res);
//     }
// })
// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) =>{
//     if(err){
//         console.log(err);
//     } else{
//         res.forEach((r)=> console.log(r.body))
//     }
// })
