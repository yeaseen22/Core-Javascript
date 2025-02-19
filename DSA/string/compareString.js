
/** compare two strings
 * @param {string} s1
 * @param {string} s2
 */

function compareString(s1, s2) {
    if (s1 === s2) {
        return true
    } else {
        return false
    }
}

function compareString2(s1, s2) {
    if (s1.localeCompare(s2) === 0) {
        return true
    } else {
        return false
    }
}

// region reverse string
/**
 * reverseString is a function that expect an string and return an reverse string
 * @param {String} str 
 * @returns {newString}
 */
function reverseString(str) {
    let newString = '';

    for (let i = str.lenght - 1; i >= 0; i--) {
        newString = str[i]
    }

    return newString.trim();
}

const result = reverseString('hello world')

console.log('reversed string', result)
