/**
 *  charAt
 * 1. safely return the character at a specific index
 * 2. out of bounds or invalid indexes return an empty index
 * 3. It's useful for capitalizing, extracting initials, and character-based logic.
 */

const str = 'React';
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));

}

console.log('Express'.charAt(2.9)); //convert 2.9 to 2

function simpleHash(str) {
    let has = 0;
    for (let i = 0; i < str.length; i++) {
        has += str.charCodeAt(i)
    }

    return has
}

const result = simpleHash('Hi')
console.log('result',result);


