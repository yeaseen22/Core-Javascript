/**
 * @Title: update existing element in array
 */

const numbers = [1,2,4,5,6];
numbers[2] = 3;
console.log(numbers); 

// array of objects
const studnets = [
    {id:1, name: 'Nayme'},
    {id:2, name: 'Shegufa'},
    {id:3, name: 'Shayaik'},
    {id:4, name:'Setu'},
    {id: 5, name: 'Mehedi'}
]



const givenId = 3;
const updatedName = 'Shayak Salvy'

for(let i=0; i< studnets.length; i++){
    if(studnets[i].id === givenId){
        studnets[i].name = updatedName;
        break;
    }
}

console.log(studnets);



