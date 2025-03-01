
let namePractice: string = 'Alice'
let greetingPractice: string = `Hello ${namePractice}`


let str: string = 'Typescript';

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase())

let strSlice: string = str.slice(0.3)
console.log('string slice', strSlice);

let replace: string = str.replace('Typescript', 'Javascript');

let text1 = 'Hello';
let text2 = 'World';
let text3 = text1.concat(' ', text2);
let text4 = 'hello   '
text4.trim();

let text5 = 'Hello World';
text5.charAt(0);

// string to array
let text6 = 'Hello World';
text6.split(' ');