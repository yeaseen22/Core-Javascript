
/**
 * @param {string} str
 */

function stringLength(str){
    return str.length;
}
const lenght = stringLength("Hello World")
console.log(lenght, 'cheking the lenght of the string');


/**
 * the function calculate the lenght of the string using loop
 * @param {string} str
 */
function stringLengthLoop(str){
    let count = 0;
    while(str[count] !== undefined){
        count++
    }

    return count;
}

const lenghtLoop = stringLengthLoop("Hello World")
console.log(lenghtLoop, 'cheking the lenght of the string using loop');
