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


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list .nav__link");
    const menuIcon = document.querySelector('#menu-icon');
    const closeIcon = document.querySelector('#close-icon');


    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");

        if (menuIcon.style.display === 'none') {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    });

    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            navList.classList.remove("active");
        });
    });
});




