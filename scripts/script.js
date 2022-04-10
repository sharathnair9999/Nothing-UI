const hamburger = document.querySelector(".ham");
const aside = document.querySelector("nav");
const navSection = document.querySelector(".collapsible");
const navLinks = document.querySelectorAll(".nav-links");
const close = document.querySelector(".close");

document.addEventListener(
  "click",
  () => {
    if (aside.classList.contains("nav-open")) {
      aside.classList.remove("nav-open");
    }
  },
  true
);

close.addEventListener("click", () => {
  aside.classList.remove("nav-open");
});

hamburger.addEventListener("click", () => {
  aside.classList.add("nav-open");
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    let activeLink = document.querySelector(".nav-link-active");
    activeLink && activeLink.classList.remove("nav-link-active");
    navLink.classList.add("nav-link-active");
  })
);

