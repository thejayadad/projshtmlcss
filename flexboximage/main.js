const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Open modal with clicked image
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImage.src = this.src;
        captionText.innerText = this.alt;
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the image
modal.addEventListener('click', function(e) {
    if (e.target !== modalImage) {
        modal.style.display = 'none';
    }
});
