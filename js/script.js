// document.getElementById('hamburger-menu').addEventListener('click', function () {
//     var hamburger = document.getElementById('hamburger');
//     var icon = document.getElementById('hamburger-icon');
//     var close = document.getElementById('x-icon');

//     hamburger.style.display = (hamburger.style.display === 'none') ? 'block' : 'none';
//     icon.style.display = (icon.style.display === 'block') ? 'none' : 'block';
//     close.style.display = (close.style.display === 'none') ? 'block' : 'none';
// });

// document.addEventListener("DOMContentLoaded", function() {
//     window.onload = function() {
//         setTimeout(function() {
//             document.getElementById('preloader').style.display = 'none';
//             document.getElementById('home').style.display = 'block';
//         }, 1800);
//     };
// });

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () =>  {
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () =>  {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});