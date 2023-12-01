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

// window navigator
const appName = document.getElementById("appName");
const appCodeName = document.getElementById("appCodeName");
const platform = document.getElementById("platform");
const cookieEnabled = document.getElementById("cookieEnabled");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const userAgent = document.getElementById("userAgent");
const onLine = document.getElementById("onLine");
const language = document.getElementById("language");
const javaEnabled = document.getElementById("javaEnabled");

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

appName.innerHTML = "Navigator appName" + navigator.appName;
appCodeName.innerHTML = "Navigator appCodeName" + navigator.appCodeName;
platform.innerHTML = "Navigator platform" + navigator.platform;
cookieEnabled.innerHTML = "Navigator" + navigator.cookieEnabled;
product.innerHTML = "Navigator product" + navigator.product;
appVersion.innerHTML = "Navigator appVersion" + navigator.appVersion;
userAgent.innerHTML = "Navigator userAgent" + navigator.userAgent;
onLine.innerHTML = "Navigator onLine" + navigator.onLine;
language.innerHTML = "Navigator language" + navigator.language;
javaEnabled.innerHTML = "Navigator javaEnabled" + navigator.javaEnabled();
