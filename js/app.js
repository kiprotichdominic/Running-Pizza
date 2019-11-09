//create variables for toppings and crust
//crust
//business logic
var cripsy = {
    name: "cripsy",
    price: 60
}
var stuffed = {
    name: "cripsy",
    price: 100
}
var glutenfree = {
    name: "glutenfree",
    price: 150
};

var crust = [cripsy, stuffed, glutenfree];
//toppings
var pepperoni = {
    name: "pepperoni",
    price: 100
}
var veges = {
    name: "veges",
    price: 20
}
var bacon = {
    name: "bacon",
    price: 80
}

var toppings = [pepperoni, veges, bacon]
//pizza size
// var small = {
//     name: "small",
//     price: 300
// }
// var medium = {
//     name: "medium",
//     price: 450
// }
// var large = {
//     name: "large",
//     price: 700
// }


function Pizza(crust, toppings) {
    this.crust = crust;
    this.toppings = toppings;
}
//calculating price
function crustPrice(crust) {
    if (crust === "cripsy") {
        return crust.cripsy * 1;
    } else if (crust === "stuffed") {
        return crust.stuffed * 1;
    } else {
        return crust.glutenfree * 1;
    }
}

function toppingsPrice(toppings) {
    if (veges === "veges") {
        return toppings.veges * 1;
    } else if (pepperoni === "pepperoni") {
        return toppings.pepperoni * 1;
    } else {
        return toppings.bacon * 1;
    }
}

function sizePrice(crust) {
    if (size === "small") {
        return size.small * 1;
    } else if (size === "medium") {
        return size.medium * 1;
    } else {
        return size.large * 1;
    }
}
//ui logic
$("#form").submit(function (event) {
    event.preventDefault();
    var 
})

















