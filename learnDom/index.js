/**
 * Dom Types
 * 
 * 1.Document - repesents the entire page and it is the root node of the tree
 * 2.Node - a generic term for any element in the dom tree example(element node, text node, attribute node) 
 * 3.Element - a specific type of node that repesents html tags/element 
 * 4.NodeList - an array of node
 * 5. Attribute - repesents the attribute of a node. 
 * 6.NameNodeMap - a collection of attribute
 */


// Accessing Dom(by id, by tagName, querySelector,querySelectorAll)
let titleElem = document.getElementById("heading")
let infoElem = document.getElementsByClassName("info")

console.log(infoElem[0], infoElem[0]);
[...infoElem].forEach((elem) => {
    console.log('info', elem);
    
})

