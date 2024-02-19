let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-80px'; // Esconde o navbar quando a página é rolada para baixo
    } else {
        navbar.style.top = '0'; // Mostra o navbar quando a página é rolada para cima
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para lidar com rolagem para cima em dispositivos móveis
});