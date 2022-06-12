"use strict";

const isVisible = "is-visible";

const btnsCloseModal = document.querySelectorAll("[data-close]");
const btnsOpenModal = document.querySelectorAll("[data-open]");

const openModal = function () {
  const modalId = this.dataset.open;

  if (!modalId) return;

  document.getElementById(modalId).classList.add(isVisible);
};

const closeModal = function () {
  this.parentElement.parentElement.parentElement.classList.remove(isVisible);
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener("click", openModal);
});

btnsCloseModal.forEach(btn => {
  btn.addEventListener("click", closeModal);
});

document.addEventListener("click", e => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  console.log(e.key);
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
