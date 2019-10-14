/*eslint-env browser*/
var product;
var inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];
function display_menu() {
    "use strict";
    window.console.log("Small Inventory Management System");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("view - view all products");
    window.console.log("update - update existing product's quantity");
    window.console.log("exit - exit the program");
    window.console.log("");

}

function display(inventory) {
    "use strict";
    for (var i = 0; i < inventory.length; i++) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" + inventory[i][3]);
    }
    window.console.log("");
}

function update(inventory) {
    skuNum = Number(window.prompt("Enter sku number for updating product"));
    Quntity = Number(window.prompt("Enter stock quantity"));
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === skuNum) {
            inventory[i][2] = Quntity;
        }
    }
    window.console.log("");
}


function main() {
    "use strict";
    display_menu();
    while (true) {
        var command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            }
            else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");

}
main();