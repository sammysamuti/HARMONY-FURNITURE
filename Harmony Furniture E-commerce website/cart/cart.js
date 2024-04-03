console.log("yes");

var total = 0;
var delivery = 0;
var cart = JSON.parse(localStorage.getItem("cart")) || {};
var cartItemsContainer = document.getElementById("cartItems");
var totalPriceElement = document.getElementById("totalPrice");
var deliveryFeeElement = document.getElementById("deliveryFee");
var bodytag = document.getElementsByTagName("body")[0];
bodytag.classList.add("body");

if (Object.keys(cart).length === 0) {
  bodytag.innerHTML = "";
  // If the cart is empty, display a message
  var emptyCartMessage = document.createElement("div");
  var emptyp = document.createElement("p");
  emptyCartMessage.classList.add("empty");
  emptyCartMessage.appendChild(emptyp);
  emptyp.textContent =
    "Your cart is empty. Choose any products you want from the products page.";
  bodytag.appendChild(emptyCartMessage);
} else {
  for (var productId in cart) {
    if (cart.hasOwnProperty(productId)) {
      var item = cart[productId];
      var itemimg = document.createElement("img");
      itemimg.src = item.underimgURL;
      itemimg.width = 100;
      itemimg.height = 100;
      var itemdetails = document.createElement("div");
      itemdetails.classList.add("itemdetails");
      var singleitem = document.createElement("div");
      itemdetails.innerHTML = `
        <p>${item.productName}</p>
        <p>${item.productDescription}</p>
        <p>Price: $${item.productPrice}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="remove" onclick="removeItem('${productId}')">Remove</button>
    `;
      singleitem.classList.add("singleitem");
      singleitem.appendChild(itemimg);
      singleitem.appendChild(itemdetails);
      cartItemsContainer.appendChild(singleitem);

      total += item.productPrice * item.quantity;
      delivery = total * 0.05;
    }
  }
}
totalPriceElement.innerText = "Total price: " + total.toFixed(2) + " birr";
deliveryFeeElement.innerText = "Delivery Fee: " + delivery.toFixed(2) + "birr";
function removeItem(productId) {
  var removedItemPrice =
    cart[productId].productPrice * cart[productId].quantity;

  // Remove the item from the cart
  delete cart[productId];

  // Save the updated cart back to storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Recalculate the total price

  total -= removedItemPrice;
  delivery = total * 0.05;

  // Display the updated total price
  totalPriceElement.textContent = "Total price: " + total.toFixed(2) + " birr";
  deliveryFeeElement.innerText =
    "Delivery Fee: " + delivery.toFixed(2) + "birr";

  // Refresh the page to reflect the changes
  location.reload();
}

function checkout() {
  console.log("checkout");
  // Calculate total and delivery
  total += delivery; // Add delivery fee to total

  // Display confirmation message
  var confirmationMessage = "Your order was received successfully.\n\n";
  confirmationMessage += "Total Price: " + total.toFixed(2) + " birr";

  // Display the confirmation message
  alert(confirmationMessage);

  // Optional: You can clear the cart and redirect to another page after checkout
  localStorage.removeItem("cart");
  location.reload(); // Refresh the page or redirect to another page
}
// for the navbar
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
