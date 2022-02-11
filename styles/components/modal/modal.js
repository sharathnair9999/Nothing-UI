// Simple Modal Open and Close Feature

const openSimpleModalBtn = document.querySelector(
  ".simple-modal-container .open-modal"
);
const simpleModal = document.querySelector(".simple-modal-container .dialog-container");
const closeSimpleModal = document.querySelector(".simple-modal-container .close-modal");

openSimpleModalBtn.addEventListener("click", () => {
  simpleModal.classList.contains("hide-dialog")
    ? simpleModal.classList.remove("hide-dialog")
    : simpleModal.classList.add("hide-dialog");
  });
  
  closeSimpleModal.addEventListener("click", () => {

    simpleModal.classList.contains("dialog-container")
      ? simpleModal.classList.add("hide-dialog")
      : simpleModal.classList.remove("hide-dialog");
  });

// Scrollable Model Open and Close Feature

  const openScrollModalBtn = document.querySelector(
    ".scrollable-modal-container .open-modal"
  );
  const scrollableModal = document.querySelector(".scrollable-modal-container .dialog-container");
  const closeScrollableModal = document.querySelector(".scrollable-modal-container .close-modal");
  
  openScrollModalBtn.addEventListener("click", () => {
    scrollableModal.classList.contains("hide-dialog")
      ? scrollableModal.classList.remove("hide-dialog")
      : scrollableModal.classList.add("hide-dialog");
    });
    
    closeScrollableModal.addEventListener("click", () => {
  
      scrollableModal.classList.contains("dialog-container")
        ? scrollableModal.classList.add("hide-dialog")
        : scrollableModal.classList.remove("hide-dialog");
    });
  
  
  