var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
let PopuP = document.getElementById("Popup");

function openpopup() {
  PopuP.classList.add("open-popup");
}
function closepopup() {
  PopuP.classList.remove("open-popup");
}
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll");
  scroll.classList.toggle("show", window.scrollY > 0);
});
console.log("This is Working");
function promptForQuantity(productId) {
    
    var quantityInput = prompt('Enter quantity:', '1');

    var quantityInput = parseInt(quantityInput, 10)


    if (isNaN(quantityInput) || quantityInput < 1) {
        alert('Please enter a valid quantity.');
        return;
    }

    addToCart(productId, quantityInput);
}


        function addToCart(productId, quantityInput) {
            var productContainer = document.getElementById(productId);

            var productName = productContainer.querySelector('.description h3').innerText;
            
            var productDescription = productContainer.querySelector('.description span').innerText;
            
            var productPriceText = productContainer.querySelector(".description span.price").innerText;
    
         
            var productPrice = parseInt(productPriceText.replace(/,/g, ''), 10);
            var underimgURL = productContainer.querySelector('.underimg').style.backgroundImage;
            underimgURL = underimgURL.replace('url("', '').replace('")', '');
            var cart = JSON.parse(localStorage.getItem('cart')) || {};
       
            console.log(underimgURL)
            if (cart[productId]) {
                cart[productId].quantity += quantityInput;
            } else {
                cart[productId] = { productName, productDescription, productPrice ,quantity: quantityInput,underimgURL};
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        }








// function addToCart(productId){
//   var productContainer = document.getElementById(productId)
//   var productName = productContainer.querySelector('.description h3').innerText;
//   var productDescription = productContainer.querySelector('.description span').innerText;
//   var productPrice = parseInt(productContainer.querySelector(".description span.price").innerText.replace(/,/g, ''));

//             // Retrieve existing cart data from storage or initialize an empty object
//   var cart = JSON.parse(localStorage.getItem('cart')) || {};

//             // Check if the product is already in the cart
//             if (cart[productId]) {
//                 // Update quantity if the product is already in the cart
//                 cart[productId].quantity += 1;
//             } else {
//                 // Add a new product to the cart
//                 cart[productId] = { productName, productDescription, productPrice, quantity: 1 };
//             }

//             // Save the updated cart back to storage
//             localStorage.setItem('cart', JSON.stringify(cart));
//             console.log(productPrice)
//         }

