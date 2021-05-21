function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//GENERIC CODE
var url = window.location.href;
var newURL = url.replace("wowprogress.com", "warcraftlogs.com");
var proggressButton = document.getElementsByClassName("armoryLink")[0];

//WOWPROGRESS->WARCRAFTLOGS
var x = document.createElement("a");
var t = document.createTextNode("(warcraftlogs)");
x.setAttribute("href", newURL);
x.setAttribute("target", "_blank");
x.style.fontSize = "11px";
x.style.marginLeft = "0.3em";
x.appendChild(t);
insertAfter(proggressButton, x);

//WOWPROGRESS->RAIDERIO
var newURLIO = url.replace("https://www.wowprogress.com/character/", "https://raider.io/characters/");
var y = document.createElement("a");
var k = document.createTextNode("(raiderio)");
y.setAttribute("href", newURLIO);
y.setAttribute("target", "_blank");
y.appendChild(k);
y.style.fontSize = "11px";
y.style.marginLeft = "0.3em";
insertAfter(proggressButton, y);
