// id, class, TagName, Name

let title = document.getElementById('title')
// console.log(title);

let paragraph = document.getElementsByClassName('pera')
// console.log(paragraph);

let list = document.getElementsByName('li')
// console.log(list);

let listItemOne = document.getElementsByName('list-item-one ');
// console.log(listItemOne);

let title2 = document.querySelector('#title')
// console.log(title2);

let paragraph2 = document.querySelectorAll('.pera');
// console.log(paragraph2);

let list2 = document.querySelectorAll('li');
// console.log(list2);

let listItemOne2 = document.querySelector('[name="list-item-one"]')
// console.log(listItemOne2);

// Traversing Dom Element


let listForDom1 = document.getElementById('list')
// console.log(listForDom1);

let parentOfList = listForDom1.parentElement;
// console.log(parentOfList);

let childrenForList = listForDom1.children;
// console.log(childrenForList);

console.log(listForDom1.previousSibling);
// console.log(listForDom1.previousElementSibling);

console.log(listForDom1.firstElementChild);
// console.log(listForDom1.lastElementChild);



// loop throw html collection
let listItem = document.getElementsByTagName('li');
// console.log(listItem);

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]

// it's directly not work we want to convert it to array
listItems.forEach((li, index) =>{
    let text = li.innerHTML;
    li.innerHTML = `${index + 1} ${text}`
})


