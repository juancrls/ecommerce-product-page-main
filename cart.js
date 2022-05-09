let cartItems = [];
let cart = document.querySelector(".shopping-cart");
let lightBox = document.querySelector(".lightbox-container");

cart.addEventListener("click", () => {
    lightBox.classList.toggle("active");
})

// let deleteItem