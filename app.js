let hamb = document.querySelector(".hamburger-menu");
let mobileMenu = document.querySelector(".mobile-side-menu");

hamb.addEventListener("click", () => {
    mobileMenu.classList.toggle('active');
    hamb.classList.toggle('active');
})