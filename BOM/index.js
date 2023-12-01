let myWindow;
// slect dom element
const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

// for window location
const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

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

href.innerHTML = "Window href" + location.href;
hostname.innerHTML = "Window hostname" + location.hostname;
protocol.innerHTML = "Window protocol" + location.protocol;
port.innerHTML = "Window  port" + location.port;

function loadw3s() {
  window.location.assign("https://www.w3schools.com");
}

/**
 * for history
 */

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
