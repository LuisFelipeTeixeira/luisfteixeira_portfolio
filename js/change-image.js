document.querySelector('.toggle-links').addEventListener('click', function () {
    const openLinks = document.getElementById('openLinks');
    const closelinks = document.getElementById('closelinks');

    if (openLinks.style.display === 'none') {
        openLinks.style.display = 'block';
        closelinks.style.display = 'none';
    } else {
        openLinks.style.display = 'none';
        closelinks.style.display = 'block';
    }
});

