// Write your code here!


var element = document.getElementById("main");
element.parentNode.removeChild(element);

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "is the champion";

