let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list .nav__link");

    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });

    // Adiciona um evento de clique a cada link do menu
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            // Fecha a barra de navegação removendo a classe 'active'
            navList.classList.remove("active");
        });
    });
});




