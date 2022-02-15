var slideIndex = 1;
slideShows(slideIndex);

// Nex/previous controls
function plusSlides(n) {
  slideShows((slideIndex =slideIndex+ n));
}
// Thumbnail image controls
function currentSlide(n) {
  slideShows((slideIndex = n));
}
function slideShows(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
