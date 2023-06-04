// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.setAttribute('title', 'I am Fourth Item')
// li.innerHTML = 'Four'

let li = createElement("li", "Four", "list-group-item");
li.setAttribute("title", "I am Fourth Item");

let list = document.getElementById("list");
list.appendChild(li);

function createElement(tagName, innerHTML, clasName) {
  let tage = document.createElement(tagName);
  tage.innerHTML = innerHTML;
  tage.clasName = clasName || "";

  return tage;
}

function append(parent, children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}
