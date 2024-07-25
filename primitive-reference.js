//#region prmitive values
/**
 * string
 * number
 * boolean
 * null 
 * undefined
 * Symbol
 *  */ 

// all primitive value are stored in memory as stack, when we initialized a value it create separate memory slote



// #reference value, without primitive, rest of all are reference value
/**
 * Object
 * Array
 * Function
 * Date
 * .
 * .
 */
// it store in value as like heap, it create a pointer and the point behave as stack and the stack reference the memory heap
// mutation is mean change the original value/memory value


var a = ["sakib","tamim"]
var b = a

//  a.push('mahmudullah') // change/mutate
a = []

var language = {
    name:"Javascript",
    este: "1995",
    library: ['React', 'Vue', "Jquery"]
}

var language2 = {...language}
// immutably = not change the original value, try to copy
language.founder = 'Brendan Eich'
language.library.push('Angular')

console.log(language, 'orignal language');
console.log(language2, 'copy immutably')

console.log(a);
console.log(b);


var aa = 'sakib'

var bb = new String('sakib')  //wrapper type


// #region pass by value / pass by reference value

// let aForRe = 1;
let aForRe = {
    num: 1
};


let change = (val) => {
    // val = val+2; then it work and change outside also
    val.num = 2
}

change(aForRe)
console.log(aForRe);
// console.log(a);








