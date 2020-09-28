let t; // placeres "globalt" - navnet på timeout så timeout kan "slukkes"

export const stopTimer = () => {
  clearTimeout(t); // stop timeout
};

export const runSlideshow = () => {
  // Lyt efter klik på prev og next
  document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });
  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });

  // Lyt efter klik på dots
  document.querySelector(".dot1").addEventListener("click", function () {
    currentSlide(1);
  });
  document.querySelector(".dot2").addEventListener("click", function () {
    currentSlide(2);
  });
  document.querySelector(".dot3").addEventListener("click", function () {
    currentSlide(3);
  });

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    clearTimeout(t); // alle tidligere timeouts slettes
    showSlides((slideIndex += n)); // Laver regnestykke - hvilken slide skal vises næste gang ... nuværende slide index + eller - 1
  }

  // Thumbnail image controls
  function currentSlide(n) {
    clearTimeout(t); // alle tidligere timeouts slettes
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    t = setTimeout(function () {
      plusSlides(1);
    }, 3000);
  }
};
