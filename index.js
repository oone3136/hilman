
document.querySelector('.slideshow img').classList.add('active');

setInterval(() => {
    const activeImg = document.querySelector('.slideshow img.active');
    const nextImg = activeImg.nextElementSibling || document.querySelector('.slideshow img:first-child');
    activeImg.classList.remove('active');
    nextImg.classList.add('active');
}, 5000); // Ganti gambar setiap 5 detik
