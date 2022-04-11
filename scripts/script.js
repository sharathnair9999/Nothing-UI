const hamburger = document.querySelector(".ham");
const aside = document.querySelector("nav");
const navSection = document.querySelector(".collapsible");
const navLinks = document.querySelectorAll(".nav-links");
const close = document.querySelector(".close");
const responsiveNavigation = document.querySelector(".responsive-navigation");
const responsiveHam = document.querySelector(
  ".responsive-navigation .responsive-nav-hamburger"
);
const responsiveHamIcon = document.querySelector(
  ".responsive-navigation .responsive-nav-hamburger i"
);
const searchNav = document.querySelector(
  ".responsive-navigation .search-nav-container"
);
const navList = document.querySelector(".responsive-navigation .spaced-list");

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

const floatingBtn = document.querySelector(".floating-btn");

floatingBtn.addEventListener("click", () => window.scrollTo(0, 0));

responsiveHam.addEventListener("click", () => {
  if (
    searchNav.classList.contains("hide") &&
    navList.classList.contains("hide") && responsiveHamIcon.classList.contains("fa-bars")
  ) {
    searchNav.classList.remove("hide");
    navList.classList.remove("hide");
    responsiveHamIcon.classList.remove("fa-bars")
    responsiveHamIcon.classList.add("fa-xmark")
    return;
  }
  
  responsiveHamIcon.classList.remove("fa-xmark")
  responsiveHamIcon.classList.add("fa-bars")
  searchNav.classList.add("hide");
  navList.classList.add("hide");
});
