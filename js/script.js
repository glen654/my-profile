document.getElementById('hamburger-menu').addEventListener('click', function () {
    var hamburger = document.getElementById('hamburger');
    var icon = document.getElementById('hamburger-icon');
    var close = document.getElementById('x-icon');

    hamburger.style.display = (hamburger.style.display === 'none') ? 'block' : 'none';
    icon.style.display = (icon.style.display === 'block') ? 'none' : 'block';
    close.style.display = (close.style.display === 'none') ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementsByTagName('main').style.display = 'block';
        }, 2000);
    };
});