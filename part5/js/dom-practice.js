/*eslint-env browser*/

//STEP 1
function clickme() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var myButton = window.document.getElementById("myButton");
myButton.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3
var myButton1 = window.document.getElementById("myButton1");
function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}
myButton1.addEventListener("click", writeMessage);

//STEP 4
var myButton2 = window.document.getElementById("myButton2");
myButton2.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});

//STEP 5
function init() {
    "use strict";
    var myButton3 = window.document.getElementById("myButton3");
    myButton3.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", init);

