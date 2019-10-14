var result;
//STEP 1
function halfNumber(num) {
    "use strict";
    result = num / 2;
    window.console.log("Half of " + num + " is " + result);
}
//STEP 2
function squareNumber(num) {
    "use strict";
    result = num ** 2;
    window.console.log("The result of squaring the number " + num + " is " + result);
}
//STEP 3
function percentOf(num1, num2) {
    "use strict";
    result = (num1 * 100) / num2;
    window.console.log(num1 + " is " + result + " % of " + num2);
}

//STEP 4
function findModulus(num1, num2) {
    "use strict";
    result = num2 % num1;
    window.console.log(result + " is the modulus of " + num1 + " and " + num2);
}

//STEP 5
function summation() {
    "use strict";
    var sum=0;
    var a = window.prompt("Enter numbers:").split(",");
    for (var i=0;i<a.length;i++){
        sum = sum + Number(a[i]);
    }
    window.console.log("The sum is " +  sum);
}

halfNumber(5);
squareNumber(5);
percentOf(2, 4);
findModulus(4, 10);
summation();