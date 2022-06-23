let header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

let menueToggle = document.querySelector(".menueToggle");

let navbar = document.querySelector(".navbar");

function clickNav() {
  menueToggle.classList.toggle("active");
  navbar.classList.toggle("active");
}
