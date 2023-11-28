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
