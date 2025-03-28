document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".clickable-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    lightbox.style.display = "none";
    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.classList.add("no-scroll");
        });
    });

    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.classList.remove("no-scroll"); 
    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});