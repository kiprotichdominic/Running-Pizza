//create variables for toppings and crust
//crust
var cripsy = {
    name: "cripsy",
    price: 60
}
var stuffed = {
    name: "cripsy",
    price: 60
}
var glutenfree = {
    name: "glutenfree",
    price: 60
};

var crust = [cripsy, stuffed, glutenfree];
//toppings
var pepperoni = {
    name: "pepproni",
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
var small = {
    name: "small",
    price: 300
}
var medium = {
    name: "medium",
    price: 450
}
var large = {
    name: "large",
    price: 700
}

function calcPrice(size) {
    if (size === "small") {
        return price.small * 1;
    } else if (size === "medium") {
        return price.medium * 1;
    } else {
        return price.large * 1;
    }
}