const modeBtn = document.querySelector(".day-night-btn");
const label = document.querySelector(".label");
const addItemInput = document.querySelector(".text-input");
const addBtn = document.querySelector(".btn");
const bodyBg = document.querySelector(".body");
const headerBg = document.querySelector(".header-container");
const logo = document.querySelector(".logo");
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll(".link");

const toggleDarkMode = () => {
  label.classList.toggle("label-dark");
  addItemInput.classList.toggle("text-input-dark");
  addBtn.classList.toggle("btn-dark");
  modeBtn.classList.toggle("day-night-btn-dark");
  bodyBg.classList.toggle("body-dark");
  headerBg.classList.toggle("header-container-dark");
  logo.classList.toggle("logo-dark");
  subtitles.forEach((subtitle) => subtitle.classList.toggle("subtitle-dark"));
  links.forEach((link) => link.classList.toggle("link-dark"));
};

export {
  toggleDarkMode,
  modeBtn,
  label,
  addItemInput,
  addBtn,
  bodyBg,
  headerBg,
  logo,
  subtitles,
  links,
};
