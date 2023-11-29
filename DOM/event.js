function changeText() {
  const title = document.querySelector("#title");
  title.innerHTML = "Hello World";
}

function changeMouse(id) {
  id.innerHTML = "Thank You";
}

function doOnMouse(id) {
  id.innerHTML = "mouse over";
}

const buttons = document.querySelector("#button");
buttons.onclick = function () {
  console.log("Hello World");
};

function myFunc(text) {
  console.log(text);
}

const button = document.getElementById("button");
const container = document.getElementById("container");
button.addEventListener(
  "click",
  function () {
    myFunc("hello world");
  },
  true
);

container.addEventListener(
  "click",
  function () {
    myFunc("Hello Div");
  },
  true
);
