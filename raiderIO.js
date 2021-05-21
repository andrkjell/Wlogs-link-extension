//RAIDERIO->WOWPROGRESS
var raiderIOButtons = document.querySelector('[title="Armory Profile"]');

var url = window.location.href;
var newURLWP = url.replace("raider.io/characters", "www.wowprogress.com/character");
var y = document.createElement("a");
y.setAttribute("href", newURLWP);
y.setAttribute("target", "_blank");
y.setAttribute("class", "slds-avatar slds-avatar--small slds-m-left--large");
y.setAttribute("id", "WOWPROGRESSEXTENTION");
raiderIOButtons.parentNode.insertBefore(y, raiderIOButtons[0]);


var img_add = document.getElementById("WOWPROGRESSEXTENTION");
var x = document.createElement("img");
x.setAttribute("title", "WOW Progress Profile");
x.setAttribute("src", "https://addonswow.com/wp-content/themes/addonswow.com/addons/wowprogresslink/screenshots/wowprogresslink-scr-1.png");
x.setAttribute("border", "0");
x.setAttribute("width", "64");



x.setAttribute("height", "64");
img_add.append(x, img_add[0]);

