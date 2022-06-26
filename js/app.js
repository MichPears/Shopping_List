const modeBtn = document.querySelector(".day-night-btn");
const addForm = document.querySelector(".shopping-form");
const label = document.querySelector(".label");
const addItemInput = document.querySelector(".text-input");
const addBtn = document.querySelector(".btn");
const bodyBg = document.querySelector(".body");
const headerBg = document.querySelector(".header-container");
const logo = document.querySelector(".logo");
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll(".link");

let defaultMode = true;
modeBtn.addEventListener("click", () => {
  label.classList.toggle("label-dark");
  addItemInput.classList.toggle("text-input-dark");
  addBtn.classList.toggle("btn-dark");
  modeBtn.classList.toggle("day-night-btn-dark");
  bodyBg.classList.toggle("body-dark");
  headerBg.classList.toggle("header-container-dark");
  logo.classList.toggle("logo-dark");
  subtitles.forEach((subtitle) => subtitle.classList.toggle("subtitle-dark"));
  links.forEach((link) => link.classList.toggle("link-dark"));
  if (defaultMode) {
    modeBtn.innerHTML = `<span class="material-symbols-outlined">
  dark_mode
  </span>`;
    defaultMode = false;
  } else {
    modeBtn.innerHTML = `<span class="material-symbols-outlined"> light_mode </span>`;
    defaultMode = true;
  }
});
