document.getElementById("alert1").style.display = "none";
//ui logic
function updateTotal() {
    var tot = 0;
    tot +=
        toppings.value * 1 +
        crust.value * 1 +
        size.value * 1;
    document.getElementById("cost").value = tot.toFixed(2);
}

var f = document.forms["myForm"];
var sel = document.getElementsByTagName("select");
var check = document.getElementById("checkbox");

for (var i = 0; i < sel.length; i++) {
    sel[i].onchange = function () {
        updateTotal();
    };
}

f.onsubmit = function () {
    alert("Your total cost will be: Ksh " + f.cost.value);
    document.getElementById("span1").innerHTML = ("Your order has been received. We are always glad to serve you. Your total cost is Ksh " + f.cost.value + " and will be delivered to your location. NO PIZZA IS LIMITED");
    document.getElementById("alert1").style.display = "block"
    return false
};