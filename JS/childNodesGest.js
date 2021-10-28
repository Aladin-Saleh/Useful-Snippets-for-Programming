/**
 * This function allow to add child to a given element/node.
 * @param {string} childOf the id of the element we want to add child.
 * @param {string} elementType the type of the node (h1,h2,p...); 
 * @param {string} elementText The text to put into the childNode we've create. 
 */
function addChildNodes(childOf,elementType,elementText){
    var node = document.createElement(elementType);
    var textnode = document.createTextNode(elementText);
    node.appendChild(textnode)
    document.getElementById(childOf).appendChild(node);
}



/**
 * This function delete the first child of a given element.
 * @param {string} childOf the id of the element we want to remove child.
 */
function deleteChildNodes(childOf){
    let elem = document.getElementById(childOf);
    elem.removeChild(elem.childNodes[0]);
}
