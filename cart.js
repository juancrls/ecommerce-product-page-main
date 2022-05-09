// let cartQuantity = 0;
// let cart = document.querySelector(".shopping-cart");
// let lightBox = document.querySelector(".lightbox-container");

// cart.addEventListener("click", () => {
//     lightBox.classList.toggle("active");
// })

// let cartContent = document.querySelector(".cart-content");
// let emptyCartMessage = document.querySelector(".cart-empty");

// if(cartQuantity == 0) {
//     cartContent.style.display = "none";
//     emptyCartMessage.style.display = "flex";
// } else {
//     cartContent.style.display = "block";
//     emptyCartMessage.style.display = "none";
// }



// let addItem = document.querySelector(".add-item");
// let removeItem = document.querySelector(".remove-item");
// let removeAll = document.querySelector(".delete-item-icon");

// let cartQuantityNotification = document.querySelector(".shopping-cart .item-quantity");

// let itemQuantity = document.querySelectorAll(".item-quantity")

// addItem.addEventListener("click", () => {
//     if(cartQuantity >= 10) return;

//     cartQuantity++;
//     itemQuantity.forEach(quantity => quantity.innerHTML = cartQuantity);
//     cartQuantityNotification.style.display = "flex";

//     cartContent.style.display = "block";
//     emptyCartMessage.style.display = "none";
// })

// removeItem.addEventListener("click", () => {
//     cartQuantity--;
//     itemQuantity.forEach(quantity => quantity.innerHTML = cartQuantity);

//     if(cartQuantity == 0) {
//         cartContent.style.display = "none";
//         cartQuantityNotification.style.display = "none";
//         emptyCartMessage.style.display = "flex";

//         return;
//     }
// })

// removeAll.addEventListener("click", () => {
//     cartQuantity = 0;
//     itemQuantity.forEach(quantity => quantity.innerHTML = 0);

//     cartContent.style.display = "none";
//     cartQuantityNotification.style.display = "none";
//     emptyCartMessage.style.display = "flex";

//     return;
// })