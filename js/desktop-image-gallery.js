let mainImage = document.querySelector('.product-image');
let thumbnailImages = document.querySelectorAll('.product-thumbnail');

thumbnailImages.forEach(thumbnail => {
    let imageSource = thumbnail.src
    
    thumbnail.addEventListener("click", () => {
        mainImage.src = imageSource.split('-thumbnail').join('');
    })
})