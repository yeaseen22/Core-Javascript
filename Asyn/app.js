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

function sayName(name){
    setTimeout(() => {
        
        console.log(name);
    }, 3000);
}

let output = sayName('Hm Nayem')
console.log(output);

