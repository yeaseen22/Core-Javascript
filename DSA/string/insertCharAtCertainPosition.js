/**
 * @param {string} string
 * @param {Array} stars
 */

function inserChatAtCertainPosition(string, stars) {
    let n = string.length;
    let ans = "";
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (j < stars.length && i === stars[j]) {
            ans += "*";
            j++;
            console.log(j, 'j');

        }
        ans += string[i]
    }

    return ans;
}

const chars = [1, 5, 7, 9]

const result = inserChatAtCertainPosition("Helloworld", chars)
console.log(result, 'result');


/**
 * @param {string} string
 * @param {string} char
 */

function removeAllOccurrences(string, char){
    let n = string.length;
    let ans = "";

    for(let i=0; i< n; i++){
        if(string[i] !== char){
            ans += string[i];
        }
    }

    return ans;
}

const resultOccurrences = removeAllOccurrences("Helloworld", "l");

// console.log(resultOccurrences, 'resultOccurrences');
