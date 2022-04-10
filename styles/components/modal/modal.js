const openSimpleModalBtn = document.querySelector(
  ".simple-modal-container .open-modal"
);
const openScrollableModalBtn = document.querySelector(
  ".scrollable-modal-container .open-modal"
);

const closeSimpleModalBtn = document.querySelectorAll(
  ".simple-modal-container .close-modal"
);
const closeScrollableModalBtn = document.querySelectorAll(
  ".scrollable-modal-container .close-modal"
);

const simpleDialogContainer = document.querySelector(
  ".simple-modal-container .dialog-container"
);
const scrollableDialogContainer = document.querySelector(
  ".scrollable-modal-container .dialog-container"
);

openSimpleModalBtn.addEventListener("click", () => {
  simpleDialogContainer.classList.add("show-dialog");
  simpleDialogContainer.classList.remove("hide-dialog");
});

closeSimpleModalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    simpleDialogContainer.classList.remove("show-dialog");
    simpleDialogContainer.classList.add("hide-dialog");
  })
);
openScrollableModalBtn.addEventListener("click", () => {
  scrollableDialogContainer.classList.add("show-dialog");
  scrollableDialogContainer.classList.remove("hide-dialog");
});

closeScrollableModalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    scrollableDialogContainer.classList.remove("show-dialog");
    scrollableDialogContainer.classList.add("hide-dialog");
  })
);

const dialogContainer = document.querySelectorAll(".dialog-container");

dialogContainer.forEach((dialog) =>
  window.addEventListener("mouseup", (e) => {
    if (e.target == dialog) {
      dialog.classList.remove("show-dialog");
      dialog.classList.add("hide-dialog");
    }
  })
);
