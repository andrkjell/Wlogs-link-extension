function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var url = window.location.href;
var newURL = url.replace("wowprogress", "warcraftlogs");
var proggressButton = document.getElementsByClassName("armoryLink")[0];
var x = document.createElement("a");
var t = document.createTextNode("  (warcraftlogs)");
x.setAttribute("href", newURL);
x.appendChild(t);
insertAfter(proggressButton, x);
