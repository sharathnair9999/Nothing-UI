
const baselineOpen = document.querySelector(".baseline-snackbar");
const leadingOpen = document.querySelector(".leading-snackbar");
const stackedOpen = document.querySelector(".stacked-snackbar");
const baselineBar = document.querySelector(".window-for-baseline");
const leadingBar = document.querySelector(".window-for-leading");
const stackedBar = document.querySelector(".window-for-stacked");
const baselineClose = document.querySelector(
  ".window-for-baseline .close-icon"
);
const leadingClose = document.querySelector(".window-for-leading .close-icon");
const stackedClose = document.querySelector(".window-for-stacked .close-icon");

baselineOpen.addEventListener("click", () => {
  baselineBar.classList.contains("window-for-baseline")
    ? baselineBar.classList.toggle("hide")
    : baselineBar.classList.toggle("window-for-baseline");
});

baselineClose.addEventListener("click", () => {
  baselineBar.classList.toggle("hide");
});

leadingOpen.addEventListener("click", () => {
  leadingBar.classList.contains("window-for-leading")
    ? leadingBar.classList.toggle("hide")
    : leadingBar.classList.toggle("window-for-leading");
});

leadingClose.addEventListener("click", () => {
  leadingBar.classList.toggle("hide");
});
stackedOpen.addEventListener("click", () => {
  stackedBar.classList.contains("window-for-stacked")
    ? stackedBar.classList.toggle("hide")
    : stackedBar.classList.toggle("window-for-stacked");
});

stackedClose.addEventListener("click", () => {
  stackedBar.classList.toggle("hide");
});
