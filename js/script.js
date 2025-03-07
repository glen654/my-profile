const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const portfolioDetails = document.querySelectorAll(".portfolio-detail");
const totalProjects = portfolioDetails.length;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  index = (index + 1) % totalProjects;

  if (index === totalProjects - 1) {
    arrowRight.classList.add("disabled");
  }
  if (index > 0) {
    arrowLeft.classList.remove("disabled");
  }

  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  index = (index - 1 + totalProjects) % totalProjects;

  if (index === 0) {
    arrowLeft.classList.add("disabled");
  }
  if (index < totalProjects - 1) {
    arrowRight.classList.remove("disabled");
  }

  activePortfolio();
});

activePortfolio();

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
      document.getElementsByTagName("main").style.display = "block";
    }, 2000);
  };
});
