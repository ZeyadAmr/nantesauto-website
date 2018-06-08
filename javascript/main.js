// Change navbar color on scroll
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Slider
new Siema({
  loop: true,
});
