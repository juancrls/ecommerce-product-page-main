let previousButton = document.querySelector(".previous-button");
let nextButton = document.querySelector(".next-button");
let productImage = document.querySelector('.product-image');
let imgIndex = 1;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

nextButton.addEventListener("click", async () => {
    imgIndex <= 3 ? imgIndex++ : null;
    productImage.src = `images/image-product-${imgIndex}.jpg`;
})

previousButton.addEventListener("click", () => {
    productImage.src = `images/image-product-${imgIndex}.jpg`;
    imgIndex >= 2 ? imgIndex-- : null;
})