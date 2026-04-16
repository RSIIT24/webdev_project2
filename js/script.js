document.addEventListener("DOMContentLoaded", function () {

  const alertBtn = document.getElementById("alertBtn");
  if (alertBtn) {
    alertBtn.addEventListener("click", function () {
      alert("Thanks for visiting my website!");
    });
  }

  let currentIndex = 0;

  const images = [
    "images/technology.jpg",
    "images/network.jpg",
    "images/learning.jpg"
  ];

  const sliderImg = document.getElementById("slider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function updateImage() {
    if (sliderImg) {
      sliderImg.src = images[currentIndex];
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      updateImage();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      updateImage();
    });
  }

});
