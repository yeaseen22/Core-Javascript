// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.setAttribute('title', 'I am Fourth Item')
// li.innerHTML = 'Four'

// let li = createElement("li", "Four", "list-group-item");
// li.setAttribute("title", "I am Fourth Item");

// let list = document.getElementById("list");
// list.appendChild(li);

// function createElement(tagName, innerHTML, clasName) {
//   let tage = document.createElement(tagName);
//   tage.innerHTML = innerHTML;
//   tage.clasName = clasName || "";

//   return tage;
// }

// function append(parent, children) {
//   children.forEach((child) => {
//     parent.appendChild(child);
//   });
// }

// list.insertAdjacentElement("after", div);

console.log(document.getElementById("demo"));
console.dir(document.getElementById("demo"));

setTimeout(function () {
  const p = document.querySelector("#demo");
  p.style.color = "green";
  p.style.fontSize = "30px";
}, 2000);

document.querySelector("#demo");

const element = document.getElementById("link");
element.href = "test.jpg";
