function createCard(){
    let element = document.getElementById("card");
    let newElement = document.createElement("span");
    
    let fn = getFirstName();
    let ln = getLastName();
    let value = fn+" "+ln;

    let textNode = document.createTextNode(value)

    newElement.appendChild(textNode);
    element.appendChild(newElement);
}

function getFirstName(){
    let fn = document.getElementById("firstname");
    return fn.value;
}
function getLastName(){
    let ln = document.getElementById("lastname");
    return ln.value;
}