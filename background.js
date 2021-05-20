function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var url = window.location.href;
var newURL = url.replace("wowprogress.com", "warcraftlogs.com");
var proggressButton = document.getElementsByClassName("armoryLink")[0];
var x = document.createElement("a");
var t = document.createTextNode("     (warcraftlogs)");
x.setAttribute("href", newURL);
x.setAttribute("target", "_blank");
x.appendChild(t);
insertAfter(proggressButton, x);


var newURLIO = url.replace("https://www.wowprogress.com/character/", "https://raider.io/characters/");
var y = document.createElement("a");
var k = document.createTextNode("     (RaiderIO)");
y.setAttribute("href", newURLIO);
y.setAttribute("target", "_blank");
y.appendChild(k);
insertAfter(proggressButton, y);
