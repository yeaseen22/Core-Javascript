/**
 * @title: Array push and pop methods,
 * for implementing stack
 */

const Stack = require('./stack');

const stack = new Stack();
const text = 'HELLO';

for(let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i) );
}

let reversedText = '';
while(!stack.isEmpty()){
    console.log( `[POPED] -`);
    console.log(stack);
    reversedText+= stack.pop();
} 

// console.log(reversedText);
// console.log(stack);

/// javascript Array stack methods

const text1 = 'HELLO';
const jsStack = [];
for(let i = 0; i < text1.length; i++){
    jsStack.push(text1.charAt(i));
}
// console.log(jsStack);

let result1 = '';
while(jsStack.length) result1 += jsStack.pop();
console.log(result1);




