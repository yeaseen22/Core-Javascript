
/**
 * 
 * create element
 * inserting elements
 * modifiying content
 * removing element
 * read,write and remove attribute
 * travarsing/navigation dom
 * manipulating styles
 * manipulating classes
 * controlling visibilities
 */


// create elements
const pElem = document.createElement("p")
pElem.innerText = 'Hello dom manipulation';
document.body.appendChild(pElem)


// insert
const span = document.createElement("span")
span.innerText = 'I am new span';

const pElemt = document.querySelector("p")
// document.body.insertBefore(span, pElemt)
// insert after p
document.body.insertBefore(span, pElemt.nextElementSibling) // if second argument null then element in last of parent


// remove/replacing
const list = document.getElementById("myList")
const itemToRemove = list.children[0];
list.removeChild(itemToRemove)
console.log(list.children);
list.replaceChildren(span) //if no param then it remove all list

document.getElementById('remove').remove()


// read wirte and remove attribute
const imgElem = document.querySelector('img')
// console.log(imgElem);

console.log(imgElem.getAttribute('src', 'again.jpg'));

imgElem.setAttribute('src', 'agan.jpg')
imgElem.removeAttribute('srcset')
imgElem.hasAttribute('src') //true

// parent element/parent node
const span2 = document.getElementById('text')
console.log('id tag', span2);

console.log('parent element', span2.parentElement);
console.log('parent Node', span2.parentNode);

// children and children nodes
const mainElement = document.getElementById('main-id');
// console.log('children', mainElement.children);
// console.log('children node', mainElement.childNodes);
console.log('first child',mainElement.firstChild);
console.log('first child element', mainElement.firstElementChild);


// nextSibling, nextElementSibling, previousSibling, previousElementSibling




