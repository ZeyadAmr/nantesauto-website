// Change navbar color & size on scroll
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
    nav.classList.remove("nav-big");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("nav-big");
  }
});

// Slider
new Siema({
  loop: true,
});
