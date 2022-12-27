// javaScript let var const variable confusion

var varariable = 'This is var'
console.log(varariable)
if (true) {
//   var varariable = "This is var";
  var varariable = "This is var again";
}

console.log(varariable);

if (true) {
  let letVariable = "This is let";
//   let letVariable = 'This is let again';
letVariable = 'This is let again'
  console.log(letVariable);
}
// console.log(letVariable);


if(true){
    // const letVariable3 = 'This is const';
    // letVariable3 = 'This is const again';
    // console.log(letVariable3)

    const letVariable3 = {
        javascrips: 'hello',
        Game: "FiFA"
    }
    letVariable3.javascrips = 'Hi'
    console.log(letVariable3);
}
// console.log(letVariable3)

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';