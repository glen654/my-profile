document.getElementById('hamburger-menu').addEventListener('click', function () {
    var hamburger = document.getElementById('hamburger');
    var icon = document.getElementById('hamburger-icon');
    var close = document.getElementById('x-icon');

    hamburger.style.display = (hamburger.style.display === 'none') ? 'block' : 'none';
    icon.style.display = (icon.style.display === 'block') ? 'none' : 'block';
    close.style.display = (close.style.display === 'none') ? 'block' : 'none';
});