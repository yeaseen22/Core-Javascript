let text = "Visit W3Schools";
// let n = text.search("W3");
let n = text.search(/W3/i);
console.log(n);

let replaceText = "Visit Microsoft";
let result = replaceText.replace(/microsoft/gi, "w3School"); // g stands for global, m for multiline
console.log(result);
