document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelectorAll('.motif-row');
    // console.log("motif-row container:", container);

    function renderImages() {
        const imageWidth = 100;

        container.forEach(container => {
            container.innerHTML = '';  
            const containerWidth = container.offsetWidth;
            let repeatCount = Math.floor(0.9 * containerWidth * (1 - Math.floor(containerWidth / imageWidth) / 100) / imageWidth);

            // console.log("Repeat Count:", repeatCount);
            
            for (let i = 0; i < repeatCount; i++) {
                const img = document.createElement('img');
                img.src = './assets/motif.jpg';
                img.alt = 'Motif';
                img.style.width = `${imageWidth}px`;
                img.style.height = 'auto';
                container.appendChild(img);
            }

            // console.log("Image count in motif-row:", container.children.length); 
        });
    }
        
    renderImages();
    window.addEventListener('resize', renderImages);
});