// switch case practice via javascript.info

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Is this match " + a);
    break;
  case 4:
    console.log("Is That match " + a);
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

// using group case
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
