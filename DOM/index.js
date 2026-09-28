



// Dom Type
// 1 Document: Present the entire page and it is the root node of the DOM tree
// 2 Node : A generic term for every element of DOM tree. element node, text node, attribute node
// 3 Element: A specific type of node that represnts HTML tags/element
// 4 NodeList: An array of nodes
// 5 Attribuite: represnt the attribute of a node. <img src'' alt='' />
// 6 NameNodeMap: A Collection of Attribute


// from an element if we want retrive text then use innerText

function filterList() {
    // console.log('log');

    const inputElem = document.getElementById('searchInput');
    // console.log(inputElem);

    const input = inputElem.value;
    // console.log('input', input);


    const items = document.getElementById('ul#itemList li');
    console.log('itemss', items);


    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
    })
}