const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
  window.alert("hello world");
}

function showConform() {
  let text;
  if (window.confirm("Press a Button")) {
    text = "You Press Ok";
  } else {
    text = "You Press Cancled";
  }

  confirm.innerHTML = text;
}

function showPrompt() {
  let person = window.prompt("show promprt", "Harry Potter");
  let text;

  if (person === null || person === "") {
    text = "User Cancled prompt";
  } else {
    text = "Hello" + person + "!How are you";
  }

  prompt.innerHTML = text;
}
