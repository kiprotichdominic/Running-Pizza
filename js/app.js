$(document).ready(function () {
    function updateTotal() {
        var total = 0;
        total += f.size.val() * 3 +
            f.crust.val() * 3.5 +
            f.toppings.val() * 12;
        document.getElementById("totalcost").value = total.toFixed(2);
    }
    var f = document.forms["form"];
    var sel = document.getElementsByTagName("select");

    for (var i = 0; i = sel.length; i++) {
        sel[i].onChange = function () {
            updateTotal()
        };

        f.onsubmit = function () {
            alert("Your total cost will be \\$" + f.cost.value);
            return false;
        }
    }
})