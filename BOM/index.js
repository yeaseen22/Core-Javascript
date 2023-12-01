let myWindow;
// slect dom element
const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

// show window object properties
width.innerHTML = "window inner width is:" + window.innerWidth;
height.innerHTML = "window inner height is:" + window.innerHeight;
availHeight.innerHTML = "screen availHeight:" + screen.innerHeight;
availWidth.innerHTML = "screen availWidth:" + screen.availWidth;
colorDepth.innerHTML = "screen colorDepth:" + screen.colorDepth;
pixelDepth.innerHTML = "screen pixelDepth:" + screen.pixelDepth;

function openWindow() {
  myWindow = window.open("https://google.com");
}

function closeWindow() {
  myWindow.close();
}
