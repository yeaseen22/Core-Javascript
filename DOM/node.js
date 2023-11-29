const para = document.createElement("p");
const node = document.createTextNode("hello world");

para.appendChild(node); //<p>hello worl </p>

const element = document.getElementById("div1");

// element.appendChild(para);
// element.append(para);

const p1 = document.getElementById("p1");
element.insertBefore(para, p1);

const p2 = document.getElementById("p2");
// p2.remove();
// element.removeChild(p2);

element.replaceChild(para, p1);
