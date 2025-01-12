
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


