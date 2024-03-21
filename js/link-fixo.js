document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-links');
    const linksContainer = document.querySelector('.link__fixo');

    toggleButton.addEventListener('click', function () {
        linksContainer.classList.toggle('show-links');
    });
});




