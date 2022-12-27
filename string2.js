let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// Escape Character
let text2 = "We are the so-called \"Vikings\" from the north.";
let text3= 'It\'s alright.';
let text4 = "The character \\ is called backslash.";
console.log(text2, '\n', text3, '\n', text4, '\n');

// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

let x = 'john';
let y = new String('john');
console.log(x === y)

// string methods
let str = 'Apple, Banana, Kiwi';
let part = str.slice();
console.log(part.length)