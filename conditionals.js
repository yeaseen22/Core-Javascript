"use strict";
var biscuitPrice = 10;
if (biscuitPrice < 10) {
  console.log("I will eat the biscuit");
} else {
  console.log("Khali cha is better");
}

var jobePaico = true;
var savingAmount = 5000;

if (jobePaico == true && savingAmount > 200000) {
  console.log("Aso tomare patri khuji");
} else if (jobePaico == true) {
  console.log("Acha thike ace thekha suru kormu");
} else {
  console.log("Tor kopale biya nai");
}

var n = 5;
if (n === 0) {
  console.log("This is zero");
} else if (n % 2 !== 0) {
  console.log(n + " This is a odd number");
} else {
  console.log(n + " This Even Number ");
}

var date = new Date();
// 0 is sunday, 1 monday, 2 Tuseday

var today = date.getDay();

switch (today) {
  case 0:
    console.log("Today is Sunday " + today);
    break;
  case 1:
    console.log("Today is Monday " + today);
    break;
  case 2:
    console.log("Today is Tuesday " + today);
    break;
  case 3:
    console.log("Today is Wednesday " + today);
    break;
  case 4:
    console.log("Today is Thusday " + today);
    break;
  case 5:
    console.log("Today is Friday " + today);
    break;
  case 6:
    console.log("Today is Saturday " + today);
    break;
  default:
    console.log('There is no match! ')
    break;
}


var number = 11;

var result = number % 2 === 0 ? "Event" : "Odd";
console.log(result);

var names = '';

var fullName = names || 'Yaseen Arafat';
console.log(fullName);

var isOk = true;

if(isOk){
  console.log(`Everything is OK ${isOk} `)
}