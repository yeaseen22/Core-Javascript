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
        has += str.charAt(i)
    }

    return has
}

const result = simpleHash('Hi')
console.log('result char', result);




const char = 'ABC';

console.log(char.charCodeAt(0));
console.log(char.charCodeAt(1));
console.log(char.charCodeAt(2));
console.log(char.charCodeAt(3));

function hashSimple(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i)
    }
    return hash
}

console.log('charcodeat', hashSimple('abc'));
console.log("".charCodeAt(0));
console.log(true.toString().charCodeAt(0));
console.log(1234..toString().charCodeAt(0));
console.log(null?.toString().charCodeAt(0));


const string = 'javaScript';
str.at(0);     // "J"
str.at(4);     // "S"
str.at(-1);    // "t" → last character
str.at(-2);    // "p" → second-last character
str.at(100);   // undefined
str.at(-100);

const lastChar = 'frontend'.at(-1) /// d
const items = ["react", "vue", "svelte"];
const secondLast = items.at(-2); // "vue"


console.log(str.slice(0, 4));     // "Java"
console.log(str.slice(4));        // "Script" (till end)
console.log(str.slice(-6));       // "Script"
console.log(str.slice(4, -3));    // "Scr"

console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4));      // "Script"
console.log(str.substring(4, 1));   // "ava" (start and end swapped)
console.log(str.substring(-3));     // "JavaScript" (negative treated as 0)


console.log(str.substr(0, 4));     // "Java"
console.log(str.substr(4, 6));     // "Script"
console.log(str.substr(-6, 3));    // "Scr"

function senitizeInput(input) {
    return input.trim();
}

const rowName = '  John Doe  '
const cleanName = senitizeInput(rowName)
console.log('className', cleanName);

function isValidEmail(email) {
    return email.trim().includes('@')
}

console.log(isValidEmail("  user@example.com  "));
console.log(isValidEmail("  invalidemail.com  "));


console.log('5'.padEnd(3, "0"));
console.log("abc".padEnd(6, "-"));
console.log("42".padEnd(5));
console.log("c".padEnd(1));

const hour = 9;
const minute = 5;

const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
console.log(time); // "09:05"

function maskCard(cardNumber) {
  return cardNumber.slice(-4).padStart(cardNumber.length, "*");
}

console.log(maskCard("1234567812345678")); // "************5678"


function generateSerial(index) {
  return `SN-${index.toString().padStart(4, "0")}`;
}

console.log(generateSerial(7));    // "SN-0007"


