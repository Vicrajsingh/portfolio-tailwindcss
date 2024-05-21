//navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnavbar = header.offsetTop;

  if (window.pageYOffset > fixnavbar) {
    header.classList.add("navbar");
  } else {
    header.classList.remove("navbar");
  }
};

//garis
const garis = document.querySelector("#garis");
const menunavbar = document.querySelector("#menunav")

garis.addEventListener("click", function () {
  garis.classList.toggle("garishidup");
  menunavbar.classList.toggle("hidden");

});
