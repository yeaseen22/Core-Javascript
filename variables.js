var names = "Yaseen Arafat";
var age = 19;

console.log(names, " knows Javascript.");
console.log("His age is only ", age);
console.log(names + " is learning javascripts as a beginers");
console.log("But his age is only ", age);

// Reserve words and naming convention

// const else = 'Something';
// console.log(else);

const mathNumber = 10;
const accountNumberDetailId = "76556";

var myvariable = 3;
console.log(myvariable === 4);
console.log(myvariable !== 4);

// some condition checking

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}

// writing a function for multiplication
const multipliy = (num1, num2) => {
  let result = num1 * num2;
  return result;
};

console.log(multipliy(4, 5));

// adding an image changer

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// adding welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please Enter Your Name");
  localStorage.setItem(
    "name",
    myName
  ); /**localStorage.setItem take two agr one, name and user given data */
  (myHeading.textContent = "I am really cool"), +myName;
}
// if data have then uper function was otherwise it's go to bellow function for user set data or not
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};

//   whether user enter some data or not
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}

// some interaction
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
