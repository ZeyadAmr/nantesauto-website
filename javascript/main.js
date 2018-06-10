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

// Mobile burger menu
var toggler = document.querySelector(".navbar-toggler");
var navbar = document.querySelector("#navbar-content");

toggler.addEventListener("click", function () {
  navbar.classList.toggle("h-0");
  if (window.scrollY < 20)
  nav.classList.toggle("scrolled");
});


// Slider
var mySiema = new Siema({
  loop: true,
  duration: 600
});
document.querySelector(".prev").addEventListener("click", function () {
  mySiema.prev();
  clearInterval(sliderLoop);
});
document.querySelector(".next").addEventListener("click", function () {
  mySiema.next();
  clearInterval(sliderLoop);
});
var sliderLoop = setInterval(function () {
  mySiema.next();
}, 5000);