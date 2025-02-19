
// region reverse two word
/**
 * reverse word
 * @param {string} myWord 
 * @returns 
 */
function reverseWords(myWord) {

    let myWordArr = myWord.trim().split(' ')
    let end = myWordArr.length - 1;
    let reversedWord = '';

    for (let i = end; i >= 0; i--) {
        if (myWordArr[i] !== '') {
            reversedWord += myWordArr[i]+ ' ';
        }
    }

    return reversedWord
}

let result = reverseWords('hello world')

console.log('result', result);
