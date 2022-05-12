let cartQuantity = 0;
let cart = document.querySelector(".shopping-cart");
let lightBox = document.querySelector(".lightbox-container");

let cartContent = document.querySelector(".cart-content");
let emptyCartMessage = document.querySelector(".cart-empty");

let cartQuantityNotification = document.querySelector(".shopping-cart .cart-item-quantity");
let itemQuantity = document.querySelector(".item-quantity");
let cartItemQuantity = document.querySelectorAll(".cart-item-quantity");

cart.addEventListener("click", () => lightBox.classList.toggle("active"));

if(cartQuantity == 0) {
    cartContent.style.display = "none";
    emptyCartMessage.style.display = "flex";
} else {
    cartContent.style.display = "block";
    emptyCartMessage.style.display = "none";
}

document.querySelector(".add-item").addEventListener("click", () => {
    cartQuantity++;
    itemQuantity.innerHTML = cartQuantity;
})

document.querySelector(".remove-item").addEventListener("click", () => {
    if(cartQuantity >= 1) {
        cartQuantity--;
        itemQuantity.innerHTML = cartQuantity;
    }
})

document.querySelector(".delete-item-icon").addEventListener("click", () => {
    cartItemQuantity.forEach(quantity => {
        quantity.innerHTML = Number(quantity.innerHTML) - 1;
        
        if(quantity.innerHTML <= 0) {
            cartContent.style.display = "none";
            cartQuantityNotification.style.display = "none";
            emptyCartMessage.style.display = "flex";
        }
    });
})

document.querySelector(".add-to-cart-button-container").addEventListener("click", () => {
    if(cartQuantity == 0) return;

    cartItemQuantity.forEach(quantity => quantity.innerHTML = Number(quantity.innerHTML) + Number(cartQuantity));
    cartQuantityNotification.style.display = "flex";
    cartContent.style.display = "block";
    emptyCartMessage.style.display = "none";
})