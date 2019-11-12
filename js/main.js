//js
var shoppingCart = [];

function displayShoppingCart() {
    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
    while (orderedProductsTblBody.rows.length > 0) {
        orderedProductsTblBody.deleteRow(0);
    }
    var cart_total_price = 0;
    for (var product in shoppingCart) {
        var row = orderedProductsTblBody.insertRow();
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align = "right";
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price += shoppingCart[product].Price;
    }
    document.getElementById("cart_total").innerHTML = cart_total_price;
}

function AddtoCart(name, description, price) {
    var singleProduct = {};
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    shoppingCart.push(singleProduct);
    displayShoppingCart();
}

function popup() {
    event.preventDefault();
    prompt("Do you want your order delivered by us at Ksh.200? Enter your location if Yes and cancel if No.");
    alert("Your Order has been received. Your order is being proccessed Thanks for shopping with us.");
}