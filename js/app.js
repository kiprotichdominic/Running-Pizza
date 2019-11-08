function updateTotal() {
    var tot = 0;
    tot += f.small.value * 300 +
        f.medium.value * 450 +
        f.large.value * 750 +
        f.toppings.value * 50;
    document.getElementById("cost").value = tot.toFixed(2);
}

var f = document.forms['myForm'];
var sel = document.getElementsByTagName("select");

for (var i = 0; i < sel.length; i++) {
    sel[i].onchange = function () {
        updateTotal()
    };
}

f.onsubmit = function () {
    alert("Your total cost will be: Ksh" + f.cost.value);
    return false;
}