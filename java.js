// JavaScript code for menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBars = document.getElementById('menuBars');
    const navbar = document.querySelector('.navbar');

    menuBars.addEventListener('click', toggleMenu);

    function toggleMenu() {
        navbar.classList.toggle('active');
    }
});

// JavaScript code for Swiper slider initialization
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.REVIEWslide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
